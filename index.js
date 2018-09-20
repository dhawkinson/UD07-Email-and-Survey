'use strict';

//  using commonjs notation
//  Library modules
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');

//  Local modules
const keys = require('./config/keys');
//  Express trick: we don't need any properties from User/passport so set no variables, but we need the modules
require('./models/user');
require('./services/passport');

//  connect to db
mongoose.connect(keys.mongoURI);

//  set up app object   
const app = express();

//  middleware
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

//  routing
require('./routes/authRoutes')(app);

//  express tells node to listen for activity on a specific port
const PORT = process.env.PORT || 5000;
app.listen(PORT);

