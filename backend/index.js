const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// setup default port
app.set('port', process.env.port || 3002);

// connect to mongodb
var db= mongoose.connect('mongodb://localhost:27017/RestApi', function(err,response){
    if(err)console.log("There is an error in connectiong to mongodb");
           console.log("Connection to mongodb was successful");
});

app.use(bodyParser.json());

//initialize routes
app.use('/api',require('./Routes/api'));

// listen to the port
app.listen(app.get('port'), function(err,response){
    console.log("Server is up and running on port", app.get('port'));
});