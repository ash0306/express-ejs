const express = require('express');
const serviceRouter = express.Router();

const services = [
    {
        'id' : 1,
        "name" : "Web Devepolment"
    },
    {
        'id' : 2,
        "name" : "App Devepolment"
    },
    {
        'id' : 3,
        "name" : "Frontend Devepolment"
    },
    {
        'id' : 4,
        "name" : "Backend Devepolment"
    },
    {
        'id' : 5,
        "name" : "Full-Stack Devepolment"
    },
    {
        'id' : 6,
        "name" : "Debugging Services"
    },
    {
        'id' : 7,
        "name" : "Laptop Services"
    },
    {
        'id' : 8,
        "name" : "Testing Services"
    }
]


serviceRouter.get('/',(req,res) => {
    res.send(res.json({services}));
})


//.find method
// serviceRouter.get('/:id',(req,res) => {
//     const serviceID = Number(req.params.id);
//     const result = services.find(service => service.id === serviceID)
    
//     if(!result){
//         res.send('Services not found');
//     }
//     else{
//         res.json(result.name);
//     }
// })


serviceRouter.get('/:id',(req,res) => {
    res.send(`Service with id ${req.params.id} has name ${req.service.name}`);
})

serviceRouter.param('id',(req,res,next,id) =>{
    const regex = /^[1-9]$/;
    const isValid = regex.test(req.params.id);
    if(isValid){
        req.service = services[id-1];
    }
    else{
        res.status(500).send("Error finding service");
    }
    next();
})

module.exports = serviceRouter;