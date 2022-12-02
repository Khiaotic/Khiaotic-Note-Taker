//Dependencies
const fs = require("fs");
const express = require('express');
// const util =  require('util');
const  fs = require ('fs');
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
//Static  middleware //request to server =>start searchin pub folder
app.use(express.static("public"));

//ROUTE to/for HOMEPAGE move to routes js
app.get("/notes",  (req, res) => {
res.sendFile(path.join(_dirname,  '/public/notes.html'))
});

app.get("/", (req, res)  =>
res.sendFile(path.join(_dirname, '/public/index.html'))
);

app.get("/api/notes", (req, res) =>  {
    res.json(notes);
});
 
app.get("*",  (req, res) => {
    res.sendFile(path.join(_dirname, "/public/index.html"))
});





/// DELETE  NOTES and output new array of ones you dont delete


//keep here for order? LISTENING
app.listen(PORT, () => {
console.log (`App listening on http://localhost:${PORT}`);
});