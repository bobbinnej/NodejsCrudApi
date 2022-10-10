// this is where we will store all our routes
const express =require('express');
const router = express.Router();

// import the new user schema
var NewUser = require('../models/newuser');

// get all users in the database
router.get('/users',(req,res)=>{
    res.send("Get all users works");
});

// add a new user to database
router.post('/users',(req,res)=>{
   console.log(req.body);

   NewUser.create(req.body).then(function(newuser){
      res.send(newuser);
   }).catch((err)=>{
    res.status(422).send(err.message);
   });
});
// update users in database
router.put('/users/:id',(req,res)=>{
    res.send("update  user works");
});
// delete user
router.delete('/users/:id',(req,res)=>{
    console.log(req.params.id);
   NewUser.findOneAndDelete({_id:req.params.id}).then(function(newuser){
    res.send(newuser);
   }).catch((err)=>{
    res.status(422).send(err.message);
   });
});


// export router
module.exports=router;
