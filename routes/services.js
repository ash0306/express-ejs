const express = require('express');
const serviceRouter = express.Router();


// app.set('view engine', 'ejs');
const services = [
    {
        "name" : "Web Devepolment"
    },
    {
        "name" : "App Devepolment"
    },
    {
        "name" : "Frontend Devepolment"
    },
    {
        "name" : "Backend Devepolment"
    },
    {
        "name" : "Full-Stack Devepolment"
    },
    {
        "name" : "Debugging Services"
    },
    {
        "name" : "Laptop Services"
    },
    {
        "name" : "Testing Services"
    }
]


serviceRouter.get('/',(req,res) => {
    res.send(res.json({services}));
})

serviceRouter.post('/',(req,res) => {
    console.log(req.body);
    services.push({name:req.body.name,cost:req.body.cost, time: req.body.time});
    res.redirect(`/services/${services.length}`);
})

serviceRouter.get('/new',(req,res) => {
    res.render('newService');
})

serviceRouter.get('/:id',(req,res) => {
    res.send(`Service with id ${req.params.id} has name ${req.service.name} has cost ${req.service.cost} and time ${req.service.time}`);
})

serviceRouter.param('id',(req,res,next,id) =>{
    req.service = services[id-1];
    next();
})

module.exports = serviceRouter;