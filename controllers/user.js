async function handleSignIn(req,res) {
    res.end("hello from signin")
}
async function handleLogin(req,res) {
    res.end("hello from loginin")
    console.log("handle login")
}
module.exports = {
    handleSignIn,
    handleLogin
}