const express = require('express');
const { getstadiums } = require('../controllers/stadiumsController');
const router = express.Router();
const {stadiumsController} = require('../controllers/stadiumsController')
//COMPLETE the router
router.get('/', function(req,res,next){
    res.send('stadiums')
})

module.exports= router;

