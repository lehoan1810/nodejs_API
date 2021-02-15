const express = require('express');
const route = express.Router();

const newController = require('../app/controllers/NewsControllre');

route.use('/:slus', newController.show);
route.use('/', newController.index);


module.exports = route;
