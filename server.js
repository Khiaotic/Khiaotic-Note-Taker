//Dependencies
const fs = require("fs");
const express = require('express');
const util =  require('util');
const  fs = require ('fs');
const path = require('path');



const Port = process.env.Port || 9001;
const app = express();



//middleware
app.use(express.urlencoded({extended: true}));
//computer to understand json//json send responses
app.use(express.json());


//request to server =>start searchin pub folder
app.use(express.static('public'));

//ROUTE to/for HOMEPAGE move to routes js
app.get('/', (req, res)  =>
res.sendFile(path.join(_dirname, './public/index.html'))
);

app.get('/notes',  (req, res) =>
res.sendFile(path.join(_dirname,  './public/notes.html'))
);

app.listen(PORT, () => {
console.log ('Application is listening on PORT ${PORT}');
});