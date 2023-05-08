const express = require('express');
const feedbackRouter = express.Router();

feedbackRouter.get('/',(req,res) => {
    res.send('<h1>Feedback</h1>');
})


module.exports = feedbackRouter;