//Dependencies
const fs = require("fs");
const express = require('express');
// const util =  require('util');

const path = require('path');

//asynchronous processes
// const readFileAsync = util.promisify(fs.readFile);

const app = express();
const PORT = process.env.PORT || 8080;

//f(x) to create a new note from client
// function inputNote(body,)

//computer to understand json//json send responses
app.use(express.json());
//middleware
app.use(express.urlencoded({extended: true}));
//Static  middleware //request to server =>start searching pub folder
app.use(express.static("public"));

//ROUTE to/for HOMEPAGE move to routes js
app.get("/", (req, res)  => {
res.sendFile(path.join(__dirname, '/public/index.html'))
});
app.get("/api/notes", (req, res) =>  {
    console.log('get notes request')
    res.json(notes);
});

app.get("/notes",  (req, res) => {
res.sendFile(path.join(__dirname,  '/public/notes.html'))
});



app.get("*",  (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"))
});

// post notes with unique id
// npm i uniqid j



/// DELETE  NOTES and output new array of ones you don't delete


//keep here for order? LISTENING
app.listen(PORT, () => {
console.log (`App listening on http://localhost:${PORT}`);
});