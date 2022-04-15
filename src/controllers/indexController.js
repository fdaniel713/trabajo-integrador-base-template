const joi = require('joi');
const config = require('config');
const Stadium = require('../models/stadiumModel')
//const { stadiumsSchema } = require("../schemas/schemas");



 

async function getIndex(req, res){
    //COMPLETE WITH YOUR CODE
        const index= await Stadium.find();
        res.status(200).json(index)
  
};



module.exports = {getIndex};