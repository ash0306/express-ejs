const express = require('express');
const contactRouter = express.Router();

contactRouter.get('/',(req,res) => {
    res.send('<h1>Contact Us</h1>');
})

module.exports = contactRouter;