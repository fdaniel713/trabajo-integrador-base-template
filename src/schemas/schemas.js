const Joi = require('joi');

const stadiumSchema = Joi.object({
   
   
    imageUrl:Joi.string().min(5).required(),
    capacity:Joi.number().required(),
    description:Joi.string().min(10).required(),
    latitude:Joi.number().required(),
    longitude:Joi.number().required(),
    location:Joi.string().required(),
    stadiumName:Joi.string().min(4).required(),


    
})

module.exports =  stadiumSchema;
