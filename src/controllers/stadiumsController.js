const joi = require('joi');
const config = require('config');
const {stadiumModel} = requiere('../models/stadiumModel')
//const { stadiumsSchema } = require("../schemas/schemas");



 

async function getstadiums(req, res){
    //COMPLETE WITH YOUR CODE

    try {
       const stadium = await stadiumModel.find({})//get all stadiums
        res.status(200).json(stadium);
    }catch (err) {
        return res.status(500).json({message: err.message})
    }
};



module.exports = {getstadiums};