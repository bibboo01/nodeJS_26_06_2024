const express = require('express');
const users = require('./DB.json');
const app = express();
const port = process.env.PORT || 3000;

app.get('/api/users', (req, res) => {
    res.json(users);
});
//show data 
app.get('/api/users/:id', (req, res) => {
    res.json(users.find(user => user.id === Number(req.params.id)))
});

app.get("/", (req, res) => {
    res.send("hello! Node.js");
});

app.get("/BOOM", (req, res) => {
    res.send("hello! My Name is Tanawong");
});

//show data form table
app.listen(port, () => {
    console.log("Starting node.js at port" + port);

    console.log("Starting node.js at http://127.0.0.1:" + port + "/api/users");
});

//add data to table
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.post("/api/users", (req, res) => {
    users.push(req.body);
    let json = req.body;
    console.log(json);
    res.send("Username: " + json.username +" completed.");
});

//edit data for id
app.put("/api/users/:id",(req,res)=>{
    const UpdateIndex = users.findIndex(user => user.id === Number(req.params.id));
    res.send("Update user id" + users[UpdateIndex].id + "completed");
});

//delete data for id
app.delete("/api/users/:id",(req,res)=>{
    const deleteIndex =  users.findIndex(user => user.id === Number(req.params.id));
    res.send("Delete user id" + users[deleteIndex].id + "completed");
});