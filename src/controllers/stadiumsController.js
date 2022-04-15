const Joi = require('joi');
const stadiumSchema = require ("../schemas/schemas")
const Stadium = require('../models/stadiumModel');


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



async function newStadiums(req, res){
 
    const data= req.body;
    console.log(data);
    try {
        Joi.assert(data, stadiumSchema)
        const stad = new Stadium(data);
        await stad.save();
        res.status(200).json({
            code:"OK",
            message:"successfull request"
        })
       
    }catch (err) {
        // const error = new Error ()
        // Object.assign(error,{
        //     code: "bar request"
        
        res.status(400).json(console.log(err))
       
    }
};



module.exports = {newStadiums, getIndex, getStadiumById,getIndexHome};