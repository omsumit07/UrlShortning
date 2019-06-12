var express = require('express');
          
const router = express.Router();
router.get('/', (req,res) => {
    res.send('Everything is OK') 
})
module.exports = router;