'use strict';

//  Library modules
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');

//  Local modules
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            done(null, user)
        });
});

//  instruct app how to use passport with the google strategy
passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true                             //  allow to run through proxy (heroku needs this to maintain a https://... (secure URL))
}, (accessToken, refreshToken, profile, done) => {
    
    User.findOne({ googleID: profile.id })
        .then((existingUser) => {
            if ( existingUser ) {
                //  we already have the user -- do nothing
                done(null, existingUser);
            } else {
                //  no user -- create a new user
                new User({ googleID: profile.id, displayName: profile.displayName }).save()
                .then(user => done(null, user));
            }
        });
}));
