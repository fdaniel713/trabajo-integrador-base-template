const express = require('express');
const router = express.Router();
const {getIndex}= require('../controllers/indexController')
 const createStadiums =require ('../controllers/stadiumsController')


router.get('/', getIndex)
//router.post('/new',createStadiums)

module.exports= router;