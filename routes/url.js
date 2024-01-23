const express = require("express")
const { handleGenerateURL, handleGetUrl, handleGetAnalytics } = require("../controllers/url")
const router = express.Router();

router.post("/", handleGenerateURL)

router.get("/url/:shortID", handleGetUrl)

router.get("/analytics/:shortID",handleGetAnalytics)

module.exports = router