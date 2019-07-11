const express = require('express');

const routes = express.Router()
const db = require('./service/database');

const PacienteController = require('./controller/PacienteController');


routes.post("/create", PacienteController.store);
routes.get("/list", PacienteController.list);
routes.get("/show", PacienteController.show)
routes.put("/update/:id/", PacienteController.update);
routes.delete("/delete/:id", PacienteController.destroy);

module.exports = routes;