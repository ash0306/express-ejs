const express = require('express');
const aboutRouter = express.Router();

aboutRouter.get('/',(req,res) => {
    res.send('<h1>About Us</h1>');
})

module.exports = aboutRouter;