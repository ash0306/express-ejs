const express = require('express');
const serviceRouter = express.Router();


serviceRouter.get('/',(req,res) => {
    res.send('<h1>Services</h1>');
})


module.exports = serviceRouter;