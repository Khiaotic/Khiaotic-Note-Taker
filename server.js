//Dependencies
const fs = require("fs");
const express = require('express');
const util =  require('util');
const  fs = require ('fs');
const path = require('path');

//asynchronous processes
const readFileAsync = util.promisify(fs.readFile);

const Port = process.env.Port || 9001;
const app = express();

//f(x) to create a new note for client
function inputNote(body,)

//middleware
app.use(express.urlencoded({extended: true}));

//computer to understand json//json send responses
app.use(express.json());


//Static  middleware //request to server =>start searchin pub folder
app.use(express.static('public'));

//ROUTE to/for HOMEPAGE move to routes js
// app.get('/', (req, res)  =>
// res.sendFile(path.join(_dirname, './public/index.html'))
// );

// app.get('/notes',  (req, res) =>
// res.sendFile(path.join(_dirname,  './public/notes.html'))
// );

app.get("/api/notes", (req, res) =>{
readFileAsync('./db/db.json', "utf8").then(function(data){
    notes = [].concat(JSON.parse(data))
    res.json(notes);
})
});

//Route  to Post
app.post("/api/notes", (req, res) {
    const note =  req.body;
    readFileAsync("./db/db.json","utf8").then(function(data){
        const notes =[].concat(JSON.parse(data));
        note.id = notes.length+ 1
        notes.push(note);
        return notes
    });
})

//keep here for order?
app.listen(PORT, () => {
console.log (`App listening on http://localhost:${PORT}`);
});