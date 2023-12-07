const express = require('express')
const app= express.Router()
const productSchema = require('../schema/productSchema')
const userSchema = require('../schema/userSchema')

app.get('/product', async (req, res) => {
    let result = await productSchema.find()
   
    res.send(result)
})



app.post('/', async (req, res) => {
    let result = await userSchema.findOne(req.body)
    if (result) {
    res.send(result)
        
    } else {
    res.send({"error":"not avai"})
        
    }
})

module.exports = app;