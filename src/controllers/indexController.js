const joi = require('joi');
const config = require('config');
const Stadium = require('../models/stadiumModel')
//const { stadiumsSchema } = require("../schemas/schemas");



 

async function getIndex(req, res){
    //COMPLETE WITH YOUR CODE
      try {

        const index= await Stadium.find();
        res.status(200).json(index)
} catch(error){
    res.status(500).json({
        code:"internal server error",
        
    })
}
};


module.exports = {getIndex};