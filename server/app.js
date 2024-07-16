const express = require('express');
const app = express();
const cors = require('cors');

const PORT = 8080;

app.set(cors());

app.get("/", (res, req) => {
    req.send("Hello world");
})

app.listen(PORT, () => {
    console.log("Listening on port " + PORT);
})