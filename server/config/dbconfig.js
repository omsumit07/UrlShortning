var mongoose = require('mongoose');
var config = require('./config');

const mongoUri = config.mongo.host;
mongoose.connect(mongoUri);

mongoose.connection.on('connected', () => {
        console.log(`Database connected on ${mongoUri}`); 
})

mongoose.connection.on('error' , () => {
   console.log(`Unable to connect on db ${mongoUri}`);
})