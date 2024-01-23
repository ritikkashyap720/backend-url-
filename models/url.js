const mongoose = require("mongoose")

const url = new mongoose.Schema({
    shortID:{
        type:String,
        required:true,
        unique:true
    },
    redirectURL:{
        type:String,
        required:true
    },
    visitedTimeStamps:[{timeStamp:{type:String}}]
    
},{timestamps:true})

const Url = mongoose.model("url",url)

module.exports = Url