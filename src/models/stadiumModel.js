const { required } = require("joi");
const mongoose = require("mongoose");
const { Schema } = mongoose;


const stadiumModel = new Schema({
   
    imageUrl:    { type: String, required:true}, 
    capacity:    { type: Number, required:true }, 
    description: { type: String, required:true}, 
    stadiumName: { type: String, required:true}, 
    latitude:    { type: String, required:true}, 
    longitude:   { type: Number, required:true}
    
    });
       

const stadium = mongoose.model("stadium",stadiumModel);
module.exports = stadium; 