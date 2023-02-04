//Dependencies

const express = require('express');
const app = express();




const PORT = process.env.PORT || 3004;

const routes = require("./routes/routes")


//middleware
app.use(express.urlencoded({extended: true}));
//computer to understand json//json send responses
app.use(express.json());
//Static  middleware //request to server =>start searching pub folder
app.use(express.static("public"));
app.use("/", routes);








//keep here for order? LISTENING
app.listen(PORT, () => {
    console.log (`App listening on http://localhost:${PORT}`);
});