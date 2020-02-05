const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => res.send("welcome to Barista!"));
app.get("/add", (req, res) => res.send("drink a cup?"));

app.listen(port, () => console.log(`Running Barist on port ${port}`));
