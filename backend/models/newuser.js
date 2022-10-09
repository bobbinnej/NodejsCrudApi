const mongoose = require('mongoose');

var newUserSchema = mongoose.Schema({
    name :{
        type:String,
        minlength : 2,
        required: [true, 'Your name is required'],
        trim:true
    },
    email:{
        type : String,
        required: [true, 'Your email is required'],
        trim: true
    },
    password :{
        type : String,
        required : [true, 'Password is required'],
        trim: true
    }
});

// export our model
var newUser = module.exports = mongoose.model('newUser', newUserSchema);