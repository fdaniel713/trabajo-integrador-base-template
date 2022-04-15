const express = require('express');
const router = express.Router();
const {getIndex, getIndexHome}= require('../controllers/stadiumsController')
const { getStadiumById} = require('../controllers/stadiumsController')
//COMPLETE the router

router.get('/', getIndexHome)
router.get('/stadium', getIndex)
//router.post('/', createStadiums)
router.get('/stadium/:id', getStadiumById)

module.exports= router;

