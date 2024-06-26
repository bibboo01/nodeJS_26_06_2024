const express = require('express');

const users = require('./DB.json');

const app = express();

const port = process.env.PORT || 3000;

app.get('/api/users', (req, res) => {
    res.json(users);
});
app.get('/api/users/:id', (req, res) => {
    res.json(users.find(user => user.id === Number(req.params.id)))
});

app.get("/", (req, res) => {
    res.send("hello! Node.js");
});

app.get("/BOOM", (req, res) => {
    res.send("hello! My Name is Tanawong");
});

app.listen(port, () => {
    console.log("Starting node.js at port" + port);

    console.log("Starting node.js at http://127.0.0.1:" + port + "/api/users");
});