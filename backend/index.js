const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('./config/db');
const mongoose = require('mongoose');

//db connection
mongoose.Promise=global.Promise;
mongoose.connect(config.uri, function(err,response){
    if(err)console.log("Error in trying to connect to mongodb");
            console.log(config.secret);
            console.log("Connection to mongodb was successful for database",config.db);
});


// setup default port
app.set('port', process.env.port || 3002);

app.use(bodyParser.json());

//initialize routes
app.use('/api',require('./Routes/api'));

// listen to the port
app.listen(app.get('port'), function(err,response){
    console.log("Server is up and running on port", app.get('port'));
});