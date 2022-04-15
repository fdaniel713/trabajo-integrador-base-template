const Joi = require('joi')

const stadiumSchema = Joi.object({
   
   
    imageUrl:Joi.string().required(),
    
})

module.exports = {
    stadiumSchema
}