const Joi = require('joi')

const stadiumSchema = Joi.object({
   
   
    imageUrl:Joi.string().required(),
 
    capacity:Joi.number().required(),

    description:Joi.string().required(),

    latitude:Joi.number().required(),

    location:Joi.number().required(),

    stadiumName:Joi.string().required(),


    
})

module.exports = {
    stadiumSchema
}