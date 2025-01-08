import express from "express";
import bodyParser from 'body-parser';

const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api/login", (req, res) => {
    console.log(req.body);
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});