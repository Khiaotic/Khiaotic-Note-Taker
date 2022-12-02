const  fs  = require('fs');
const express = require('express');

// GET /notes should return the notes.html file
fs.appendFile.get("/notes",(req, res,)  =>
res.sendFile(path.join()))

// GET * should return the index.html file