//Dependencies
const fs = require("fs");
const express = require('express');
// const util =  require('util');

const path = require('path');


const app = express();
const PORT = process.env.PORT || 8080;

const {notes} = require("./db/db.json")

//computer to understand json//json send responses
app.use(express.json());
//middleware
app.use(express.urlencoded({extended: true}));
//Static  middleware //request to server =>start searching pub folder
app.use(express.static("public"));

// post notes with unique id
const uniqueId = require ("generate-unique-id");



//f(x) to create a new note from client
function InputNote (body, notesArray) {
    const note = body;
    notes.array.push(note);
    fs.writeFileSync( path.join(__dirname, "./db/db.json"),
    JSON.stringify({notes: notesArray}, null, 2)
    );
    return note;
} 





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

app.post("api/notes", (req, res) => {
    req.body.id = uniqueId();
    const note =  InputNote(req.body,notes);
    res.json(note);
});
console.log(note)



/// DELETE  NOTES and output new array of ones you don't delete
app.delete('/api/notes/:id', (req, res) => {
    const {id} = req.params;
    const deleteNote = notes.findIndex(note => note.id ==id);
notes.splice(deleteNote,1)
;
return res.send();
});

//keep here for order? LISTENING
app.listen(PORT, () => {
console.log (`App listening on http://localhost:${PORT}`);
});