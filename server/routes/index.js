const express = require('express');
const cors = require('cors');
const db = require('../db');
const router = express.Router();

router.get('/', cors(),async (req, res, next) => {
    
    try {
        let results = await db.all();
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
        res.json(results);
    }catch(e){
        console.log(e);
        res.sendStatus(500);
    }
});
module.exports = router;