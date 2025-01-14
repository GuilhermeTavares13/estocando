import express from "express";
import bodyParser from 'body-parser';
import cors from "cors";
import pg from "pg";
import bcrypt from "bcrypt";
import passport from "passport";
import env from "dotenv";
import { Strategy } from "passport-local";
import session from "express-session";

const app = express();
const port = 5000;
env.config();
// app.use(bodyParser.urlencoded({ extended: true }));

app.use(
    session({
        resave: false,
        saveUninitialized: true,
    })
);

app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

const db = new pg.Client({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
});
db.connect();

app.post(
    "/api/login",
    passport.authenticate("local", {
        successRedirect: "/secrets",
        failureRedirect: "/login",
    })
);

passport.use(
    "local",
    new Strategy(async function verify(username, password, cb) {
        try {
            const result = await db.query("SELECT * FROM users WHERE email = $1 ", [
                username,
            ]);
            if (result.rows.length > 0) {
                const user = result.rows[0];
                const storedHashedPassword = user.password;
                bcrypt.compare(password, storedHashedPassword, (err, valid) => {
                    if (err) {
                        console.error("Error comparing passwords:", err);
                        return cb(err);
                    } else {
                        if (valid) {
                            return cb(null, user);
                        } else {
                            return cb(null, false);
                        }
                    }
                });
            } else {
                return cb("User not found");
            }
        } catch (err) {
            console.log(err);
        }
    })
);

passport.serializeUser((user, cb) => {
    cb(null, user);
});

passport.deserializeUser((user, cb) => {
    cb(null, user);
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});