const express = require('express');
const serviceRouter = express.Router();

const services = [
    {
        'id' : 0,
        "name" : "Web Devepolment"
    },
    {
        'id' : 1,
        "name" : "App Devepolment"
    },
    {
        'id' : 2,
        "name" : "Frontend Devepolment"
    },
    {
        'id' : 3,
        "name" : "Backend Devepolment"
    },
    {
        'id' : 4,
        "name" : "Full-Stack Devepolment"
    },
    {
        'id' : 5,
        "name" : "Debugging Services"
    },
    {
        'id' : 6,
        "name" : "Laptop Services"
    },
    {
        'id' : 7,
        "name" : "Testing Services"
    }
]


serviceRouter.get('/',(req,res) => {
    res.send(res.json({services}));
})

serviceRouter.get('/:id',(req,res) => {
    const serviceID = Number(req.params.id);
    const result = services.find(service => service.id === serviceID)
    
    if(!result){
        res.send('Services not found');
    }
    else{
        res.json(result.name);
    }
})


module.exports = serviceRouter;