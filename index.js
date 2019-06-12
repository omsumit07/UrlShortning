var config = require('./server/config/config');
var app = require('./server/config/express');
var mongoose = require('mongoose');

global.mongoose = mongoose;
db = require('./server/config/dbconfig');

app.on('listening',function(){
    console.log('ok, server is running');
});

app.listen(config.port, () => {
    console.log(`server is running on ${config.port}`);
})