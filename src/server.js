const express = require("express");

//DATABASE
const db = require('./service/database');

//TESTE DATABASE

db.authenticate()
    .then(() => console.log("conected"))
    .catch(err => console.log('Error:' +err));





//USANDO ROTAS

const app = express();

app.use(express.json());

app.use(require('./routes'));

const PORT = process.env.PORT || 3333;
app.listen(PORT);