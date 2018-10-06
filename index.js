'use strict';

//  using commonjs notation
//  Library modules
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const express = require('express');
const mongoose = require('mongoose');
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

//  middleware calls (app.use)
//  unconditional, these are always called
app.use(bodyParser.json());
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

//  routing -- handled by the Express Router
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);

//  IN PRODUCTION,
//  others need to be handled by routes in the client/build path (specific files)
//  still others get passed off the the client/build/index.html file (by the React Router)
if ( process.env.NODE_ENV === 'production' ) {
    //  This block of routing code will operate sequentially -- first the app.use then the app.get
    //  that is how the correct serving up of files takes place
    //  Remember the previous routes have been interrogated already

    //  Express will serve up production assets like our file
    //  main.js & main.css
    app.use(express.static('client/build'));

    //  Express will serve up the index.html file
    //  if it doesn't recognize the route
    const path = require('path');
    app.get('*', (req, res) =>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });


}

//  express tells node to listen for activity on a specific port
const PORT = process.env.PORT || 5000;
app.listen(PORT);