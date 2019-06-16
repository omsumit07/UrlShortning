const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const validUrl = require('valid-url');
const UrlShorten = require('../models/UrlShorten');
const Visitor = require('../models/Visitor');
const shortCode = require('shortid');
const geoip = require('geoip-lite');
const useragent = require('express-useragent');
          

router.get('/', (req,res) => {
    res.send('Everything is OK') 
})

router.get('/getOriginalUrl/:code',async (req,res) => {
    const urlShortCode = req.params.code;
    const data = await UrlShorten.findOne({ urlShortCode: urlShortCode }).exec();
    if (data) {
       res.redirect(data.originalUrl);
    } else {
      res.send('Error');
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
            shortUrl =  'http://localhost/' + urlShortCode;
            const itemToBeSaved = { originalUrl, shortUrl, urlShortCode };
            const item = new UrlShorten(itemToBeSaved);
            await item.save();
            res.status(200).json(itemToBeSaved);
        }
    }
    else {
        return res.status(401).json('Invalid Original Url.');
    }
   
});

//store visitor details
router.get('/saveVisitor',async (req,res)=>{
    let ua = useragent.parse(req.headers['user-agent']) ;
    let geo = geoip.lookup(req.ip);
    let itemToBeSaved = {
        browser : ua.browser,
        os : ua.os,
        ip : JSON.stringify(req.ip),
        language : req.headers["accept-language"],
        country : geo ? geo.country: "Unknown",
        region : geo ? geo.region: "Unknown"
    }
    let visitorInformation = new Visitor(itemToBeSaved);
    await visitorInformation.save();

    res.status(200);
    res.header("Content-Type",'application/json');
    res.end(JSON.stringify({status: "OK"}));
});

router.get('/getVisitors',async (req,res) => {
    const data = await Visitor.find().exec();
    if(data){
        res.send(data);
    }
    else{
        res.send('No Data found');
    }
})


module.exports = router;