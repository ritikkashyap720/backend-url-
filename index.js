const connectDB = require("./connection")
const express = require("express")
const router = require("./routes/url")
const userRouter = require("./routes/user")
const logMaker = require("./middlewares")
const app = express()
const PORT = 8000
// db connection
connectDB("mongodb://localhost:27017/urlShorterner")

app.set('view engine', 'ejs');
// middleware
app.use(logMaker("log.txt"))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.get('/',userRouter);
app.use("/url",router)


app.listen(PORT,()=>{console.log(`Server running at PORT:${PORT}`)})
