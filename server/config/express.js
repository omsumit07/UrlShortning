var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var path = require('path');
//now import config variable from config.js
var config = require('./config');
//import routes
var route = require('../routes/routes');
var app = express();

app.use(bodyParser.json());
app.use(function(req, res, next) {
     res.header("Access-Control-Allow-Origin", "*");
     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
     next();
});

if(config.env == 'development')
     console.log(`app environment is ${config.env}`);
else
     console.log('app environment is not development')

app.use('/',route);

module.exports = app;