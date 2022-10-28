const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
var newUserSchema = mongoose.Schema({
    name :{
        type:String,
        minlength : 2,
        required: [true, 'Your name is required'],
        trim:true,
    },
    email:{
        type : String,
        required: [true, 'Your email is required'],
        trim: true,
        lowercase:true,
        unique:[true, 'Email already exists'],
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid E-mail format'
        ]
    },
    password :{
        type : String,
        required : [true, 'Password is required'],
        trim: true,
        minlength:[, 'Password must atleast be 6 characters in length'],
        match: [
            /^(?=.*\d)(?=.*[@#\-_$%^&+=§!\?])(?=.*[a-z])(?=.*[A-Z])[0-9A-Za-z@#\-_$%^&+=§!\?]+$/,
            'Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number and a special characters'
        ]
    },

    
},{timestamps:true});

// encrypt password before saving
newUserSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        next()
    }
    this.password= await bcrypt.hash(this.password, 10);
});

// password verification
newUserSchema.methods.comparePassword = async function(yourPassword){
     return await bcrypt.compare(yourPassword, this.password);
}

// export our model
var newUser = module.exports = mongoose.model('newUser', newUserSchema);