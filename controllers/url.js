const { nanoid } = require("nanoid")
const Url = require("../models/url");

async function handleGenerateURL(req, res) {
    const url = req.body.url;
    if (url) {
        const shortID = nanoid(8)
        await Url.create({
            shortID: shortID,
            redirectURL: url,
            visitedTimeStamps: []
        })
        res.status(200).json({ msg: "succes", shortID: shortID })
    } else {
        res.status(400).json({ msg: "url is required" })
    }
}

async function handleGetUrl(req, res) {
    const shortID = req.params.shortID
    if (shortID) {
        const result = await Url.findOneAndUpdate({ shortID }, {
            $push: {
                visitedTimeStamps: { timeStamp: new Date().toString() }
            }
        })
        if (result) {
            res.status(200).redirect(result.redirectURL);
        }
    }
}

async function handleGetAnalytics(req, res) {
    const shortID = req.params.shortID
    if (shortID) {
        const result = await Url.findOne({ shortID })
        res.status(200).json({ clickcount: result.visitedTimeStamps.length, Analytics: result.visitedTimeStamps })
    }
}

module.exports = {
    handleGenerateURL,
    handleGetUrl,
    handleGetAnalytics
}