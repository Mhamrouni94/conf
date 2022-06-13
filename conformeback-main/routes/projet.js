const express = require('express');
const { creeProjet } = require('../contollers/Projet.Controllers');

const route = express.Router();

route.post('/create',creeProjet)
module.exports = route