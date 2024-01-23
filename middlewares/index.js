const fs = require("fs")

function logMaker(fileName) {
   return(req,res,next)=>{
    fs.appendFile(fileName, `\n${(new Date).toString()} : ${req.ip} : ${req.method} : ${req.path}`, (err, data) => {
        next()
    })
   }

}

module.exports = logMaker

