
const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        
    },
   
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
       
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
       
    },
    role: {
        type: String,
        // required: true,
        enum:["teacher","admin"]
        
    }
   
});

module.exports = mongoose.model('User', userSchema);

