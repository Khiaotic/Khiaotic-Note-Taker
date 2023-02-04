const fs= require("fs");
const path= require("path");
const router= require("router");
const express= require("express");

const trackNotes = require("../db/db.json")

router.get("/api/notes", (req, res) =>  {
    // console.log('get notes request')
    const allNotes = JSON.parse (
        fs.readFileSync(path.join(__dirname, "../db/db.json"))
        )
        res.json(allNotes);
});

router.post("/api/notes", (req, res) => {
    req.body.id = uniqueId();
    const note =  InputNote(req.body, notes);
    res.json(note);
});