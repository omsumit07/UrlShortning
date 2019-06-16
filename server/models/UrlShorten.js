const mongoose = require('mongoose');
const { Schema } = mongoose;

const urlShortenSchema = new Schema({
    originalUrl: String,
    urlShortCode: String,
    shortUrl:String,
    createdAt: { type: Date, default: Date.now },
});
  
module.exports = mongoose.model("UrlShorten", urlShortenSchema);

