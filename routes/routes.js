const fs = require("fs");
const path = require("path");
const router = express.Router();
const express = require("express");

const { v4: uuid4 } = require("uuid");


// const trackNote = require("../db/db.json");

router.get("/api/notes", (req, res) => {
  // console.log('get notes request')
  const allNotes = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../db/db.json"))
  );
  res.json(allNotes);
});

router.delete("/api/notes/:id", (req, res) => {
  return fs.readFile(path.join(__dirname, "../db/db.json"), (err, data) => {
    console.log("sike..not deleted", data);
    if (err) throw err;
    const notesArray = JSON.parse(data);
    const deleteNote = notesArray.filter(
      (eraseNote) => eraseNotes.id !== req.params.id
    );
    fs.writeFileSync(
      path.join(__dirname, "../db/db.json"),
      JSON.stringify(deleteNote)
    );
    res.json(deleteNote);
  });
});

router.post("/api/notes", (req, res) => {
    const notes = JSON.parse(
        fs.readFileSync(path.join(__dirname, "../db/db.json"))
    );
  const inputNote = req.body;
  inputNote.id = uuid4();
  notes.push(inputNote);
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(notes)
  );
  res.send("new note input")
});


router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});


module.exports = router; 