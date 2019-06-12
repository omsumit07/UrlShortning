var Joi = require('joi');

require('dotenv').config();

var envVariableSchema = Joi.object({
     
          NODE_ENV : Joi.string()
                    .allow(['development','test','production'])
                    .default('development'),
          SERVER_PORT : Joi.string()
                    .default(4040),
          MONGO_HOST : Joi.string().required()
                    .description('Mongo Host Url'),
          MONGO_PORT : Joi.string()
                    .default(27010)
           
          
}).unknown()
    .required();

const {error, value : envVars} = Joi.validate(process.env, envVariableSchema) 
if(error){
     console.log(`the error is ${error}`);     
}

const config = {
     env : envVars.NODE_ENV,
     port : envVars.SERVER_PORT,
     mongo : {
         host : envVars.MONGO_HOST,
         port : envVars.MONGO_PORT
     }
}

module.exports = config;