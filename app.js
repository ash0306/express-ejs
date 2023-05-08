const express = require('express');
const app = express();

// app.get('/',(req,res)=>{
//     res.send("Hello");
// })
// const home = require('./routes/home')

app.use('/',require('./routes/home'));
app.use('/aboutus',require('./routes/aboutus'));
app.use('/contactus',require('./routes/contactus'));
app.use('/feedback',require('./routes/feedback'));
app.use('/services',require('./routes/services'));


app.listen(3500);