const mongoose = require("mongoose");
const { Schema } = mongoose;


const stadiumModel = new Schema({
   
    // imageUrl:    { type: String, required:true}, 
    // capacity:    { type: Number, required:true }, 
    // description: { type: String, required:true}, 
    // latitude:    { type: Number, required:true}, 
    // longitude:   { type: Number, required:true},
    // location:   { type: String, required:true},
    stadiumName: { type: String, required:true}, 
    });
       

const Stadium = mongoose.model("stadium",stadiumModel);
module.exports = Stadium; 