const express = require('express');
const route = express.Router();

const siteController = require('../app/controllers/SitesControllre');

route.use('/search', siteController.search);
route.use('/', siteController.index);

module.exports = route;
