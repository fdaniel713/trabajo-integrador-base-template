const joi = require('joi');
const config = require('config');
const {manifest} = require('../models/stadiumModel')
const { stadiumsSchema } = require("../schemas/schemas");
const stadium = require('../models/stadiumModel');


async function createStadiums(req, res){
    //COMPLETE WITH YOUR CODE
    const data= req.body;

    try {
        joi.assert(data,stadiumSchema)
        const stad = new stadium(data);
        await stad.save();
        res.json({
                    message: 'everything ok',
        })
       
    }catch (err) {
        const error = new error();
        Object.assign(error,{
            conde: 'bad request',
            message: err.details[0].message,
            secerity:'LOW'
        })
       
    }
};



module.exports = {createStadiums};