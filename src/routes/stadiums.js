const express = require('express');
const router = express.Router();
const {getIndex, getIndexHome, getStadiumById,getStadiumEdit, getDeleteStadiumById}= require('../controllers/stadiumsController')
const {newStadiums } = require('../controllers/stadiumsController')
//COMPLETE the router

router.get('/', getIndexHome)
router.get('/stadium', getIndex)
router.get('/stadium/:id', getStadiumById)
router.post('/stadium/new', newStadiums)
router.delete('/stadium/delete/:id', getDeleteStadiumById)
router.patch('/stadium/edit/:id', getStadiumEdit)

module.exports= router;

