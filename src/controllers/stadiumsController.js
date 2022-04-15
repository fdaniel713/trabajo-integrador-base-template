const joi = require('joi');
const config = require('config');
const stadiumSchema = require ("../schemas/schemas")
const Stadium = require('../models/stadiumModel')

async function getIndexHome(req, res){
    //COMPLETE WITH YOUR CODE
  console.log("Its Home")
  res.status(200).json("Its Home")
}

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

async function  getStadiumById(req, res) {
    try{
        const index = await Stadium.findById(req.params.id)
        res.status(200).json(index)
    }catch (err){
        //console.log(err)    
        res.status(500).json(err)

    }
}



async function createStadiums(req, res){
    //COMPLETE WITH YOUR CODE
    const data= req.body;

    try {
        joi.assert(data, stadiumSchema)
        const stad = new stadiumModel(data);
        await user.save(stad);
        res.status(200).json({
            code:"OK",
            message:"successfull request"
        })
       
    }catch (err) {
        res.status(400).json({
            conde: 'bad request',
            message: err.details[0].message,
            secerity:'LOW'
        })
       
    }
};



module.exports = {createStadiums, getIndex, getStadiumById,getIndexHome};