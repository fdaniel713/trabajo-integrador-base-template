const Joi = require('joi');
const stadiumSchema = require ("../schemas/schemas")
const Stadium = require('../models/stadiumModel');
const { message } = require('../schemas/schemas');


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
        res.status(500).json({err,
        message:"fail to request"
        })

    }
}


async function newStadiums(req, res){
 
    const data= req.body;
    //console.log(data);
    try {
        Joi.assert(data, stadiumSchema)
        const stad = new Stadium(data);
        await stad.save();
        res.status(200).json({
            code:"OK",
            message:"successfull request"
        })
       
    }catch (err) {
         
        res.status(400).json({err,
        message:"Error, review your schema"
        })
         
  
}
};

async function  getDeleteStadiumById (req, res) {
    try{
        const index = await Stadium.findById(req.params.id)
        res.status(200).json(index.deleteOne())
       
        }catch (err){
        //console.log(err)    
        res.status(500).json(
        {err,
         message:'error to delete'
        })
         
    

    }
}

async function getStadiumEdit (req, res) {
    const data= req.body;
    try{
        Joi.assert(data, stadiumSchema)
        const index = await Stadium.findByIdAndUpdate(req.params.id,data)
        res.status(200).json({index,
        message:" successful edited"})
    }catch (err){
        //console.log(err)    
        res.status(500).json({
            err,
            message:'error to edit'
         })

    }
}


module.exports = {newStadiums,getStadiumEdit, getIndex, getStadiumById,getIndexHome,getDeleteStadiumById};