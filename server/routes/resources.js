const express = require('express');
const router = express.Router();
const Resources = require("../models/Resources");

router.get("/", async (req, res) => {

    try{
        const resources = await Resources.find().sort({createdAt:-1});
        res.json(resources);
    } catch (err){
        res.status(500).json({ error: "Server Error"});
    }
    
});

module.exports = router;