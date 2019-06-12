var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var path = require('path');
//now import config variable from config.js
var config = require('./config');
//import routes
var route = require('../routes/routes');
var app = express();

if(config.env == 'development')
     console.log(`app environment is ${config.env}`);
else
     console.log('app environment is not development')

app.use('/',route);

module.exports = app;