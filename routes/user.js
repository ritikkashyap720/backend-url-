const expres = require("express")
const { handleSignIn ,handleLogin} = require("../controllers/user")
const userRouter = expres.Router()

userRouter.get("/", handleSignIn)
userRouter.get("/",handleLogin)

module.exports = userRouter