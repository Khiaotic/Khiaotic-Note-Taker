const router = require("express").router();
const { json } = require("body-parser");
const fs = require ('fs');
let dataRoute = require('./db/db.json');


////////Fucking FETCH///////////
router.get("/notes", (req, res) => {
  dataRoute = JSON.parse(fs.readFileSync("./db/db.json"));
  res.json(dbRoute);
});

router.post("/notes", (req , res) => {
  let inputNote = {
    title: req.body.title,
    text: req.body.text,
    id: 
  };
})
























































// const fs = require("fs");
// const path = require("path");
// const express = require("express");

// const router = express.Router();

// const { v4: uuid4 } = require("uuid");

// // const trackNote = require("../db/db.json");

// router.get("/api/notes", (req, res) => {
//   // console.log('get notes request')
//   const allNotes = JSON.parse(
//     fs.readFileSync(path.join(__dirname, "../db/db.json"))
//   );
//   res.json(allNotes);
// });

// router.delete("/api/notes/:id", (req, res) => {
//   return fs.readFile(path.join(__dirname, "../db/db.json"),
//   "utf8",
//    (err, data) => {
//     console.log("sike..not deleted", data);
//     if (err) throw err;
//     const notesArray = JSON.parse(data);
//     const deleteNote = notesArray.filter(
//       (eraseNote) => eraseNote.id !== req.params.id
//     );
//     fs.writeFileSync(
//       path.join(__dirname, "../db/db.json"),
//       JSON.stringify(deleteNote)
//     );
//     res.json(deleteNote);
//   });
// });

// router.post("/api/notes", (req, res) => {
//   const notes = JSON.parse(
//     fs.readFileSync(path.join(__dirname, "../db/db.json"))
//   );
//   const inputNote = req.body;
//   inputNote.id = uuid4();
//   notes.push(inputNote);
//   fs.writeFileSync(
//     path.join(__dirname, "../db/db.json"),
//     JSON.stringify(notes)
//   );
//   res.send("new note input");
// });

// router.get("/notes",  (req, res) => {
//     res.sendFile(path.join(__dirname,  '/public/notes.html'))
// });

// router.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "/public/index.html"));
// });

// router.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "/public/index.html"));
// });

// module.exports = router;
