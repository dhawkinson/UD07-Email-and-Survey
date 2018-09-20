'use strict';

//  Library modules
const mongoose = require('mongoose');
const { Schema } = mongoose;    //  es6 destructuring notation

const userSchema = new Schema({
    googleID: String,
    displayName: String
});

mongoose.model('users', userSchema);