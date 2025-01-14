import express from "express";
import bodyParser from 'body-parser';
import cors from "cors";
import pg from "pg";
import bcrypt from "bcrypt";
import passport from "passport";
import env from "dotenv";


const app = express();
const port = 5000;

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

const db = new pg.Client({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
});
db.connect();


app.post("/api/login", (req, res) => {
    console.log(req.body);
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});