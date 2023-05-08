const express = require('express');
const app = express();

// const home = require('./routes/home')

app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.render('index');
})

app.use('/home',require('./routes/home'));
app.use('/aboutus',require('./routes/aboutus'));
app.use('/contactus',require('./routes/contactus'));
app.use('/feedback',require('./routes/feedback'));
app.use('/services',require('./routes/services'));


app.listen(3500);