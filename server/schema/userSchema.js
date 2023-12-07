const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    name:String,
    username:String,
    password:String,
    dob:String,
    mobile:String
})

module.exports= mongoose.model('users',userSchema)