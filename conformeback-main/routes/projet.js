const express = require("express");
const { creeProjet, getProject } = require("../contollers/Projet.Controllers");

const route = express.Router();

route.post("/create", creeProjet);
route.get("/get", getProject);
module.exports = route;
