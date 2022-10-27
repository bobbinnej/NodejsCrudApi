const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
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

// encrypt password before saving
newUserSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        next()
    }
    this.password= await bcrypt.hash(this.password, 10);
});

// export our model
var newUser = module.exports = mongoose.model('newUser', newUserSchema);