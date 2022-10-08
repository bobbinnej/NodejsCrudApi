const express = require('express');
const app = express();

// setup default port
app.set('port', process.env.port || 3002);

// set default route
app.get('/', (req,res)=>{
    res.send("This route works");
});

// listen to the port
app.listen(app.get('port'), function(err,response){
    console.log("Server is up and running on port", app.get('port'));
});