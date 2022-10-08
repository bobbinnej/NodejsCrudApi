// this is where we will store all our routes
const express =require('express');
const router = express.Router();

// get all users in the database
router.get('/users',(req,res)=>{
    res.send("Get all users works");
});

// add a new user to database
router.post('/users',(req,res)=>{

});
// update users in database
router.put('/users/:id',(req,res)=>{

});
// delete user
router.delete('/users/:id',(req,res)=>{

});


// export router
module.exports=router;