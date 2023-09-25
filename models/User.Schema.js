const mongoose = require('mongoose');

// Schema for user model 
const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    }
})

// User model 
module.exports = mongoose.model('User', UserSchema);