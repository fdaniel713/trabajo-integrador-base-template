const mongoose = require("mongoose");
const { Schema } = mongoose;


const stadiumSchema = new Schema({
   
    imageUrl: { type: String, }, 
   // capacity: { type: Number, }, 
    
  
    },
);

const stadium = mongoose.model("stadium",stadiumSchema);
module.exports = stadium; 