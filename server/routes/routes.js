const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const validUrl = require('valid-url');
const UrlShorten = require('../models/UrlShorten');
const shortCode = require('shortid');
          

router.get('/', (req,res) => {
    res.send('Everything is OK') 
})

router.get('/getOriginalUrl/:code',async (req,res) => {
    const urlShortCode = req.params.code;
    // console.log('called');
    // res.redirect('https://google.com');
    const data = await UrlShorten.findOne({ urlShortCode: urlShortCode });
    if (data) {
      return res.redirect(data.originalUrl);
    } else {
      return res.redirect(constants.errorUrl);
    }
})

router.post('/createShortUrl',async (req,res) => {
    const { originalUrl } = req.body;
    //validate url
    if(validUrl.isUri(originalUrl)){
        //find url in db, if exist then return data otherwise save into DB
        let urlData;
        urlData = await UrlShorten.findOne({originalUrl}).exec();
        if(urlData){
            res.status(200).json(urlData);
        }
        else{
            const urlShortCode = shortCode.generate();
            shortUrl =  'http://localhost:3000/' + urlShortCode;
            const itemToBeSaved = { originalUrl, shortUrl, urlShortCode };
            const item = new UrlShorten(itemToBeSaved);
            await item.save();
            res.status(200).json(itemToBeSaved);
        }
    }
    else {
        return res.status(401).json('Invalid Original Url.');
    }
    res.send('OK');
});

module.exports = router;