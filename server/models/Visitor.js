const mongoose = require('mongoose');
const { Schema } = mongoose;

const visitorSchema = new Schema({
    browser: String,
    ip: String,
    country:String,
    language:String,
    region:String,
    os:String,
    createdAt: { type: Date, default: Date.now },
});
  
module.exports = mongoose.model("visitor", visitorSchema);