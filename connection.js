const mongoose = require("mongoose")

async function connectDB(URL){
    return(
        await mongoose.connect(URL).then(()=>{console.log("Db connected")}).catch((err)=>{console.log("Db connection error",err)})
    )
}

module.exports= connectDB