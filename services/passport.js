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
passport.use(new GoogleStrategy
    (
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback',
            proxy: true                             //  allow to run through proxy (heroku needs this to maintain a https://... (secure URL))
        }, 
        async (accessToken, refreshToken, profile, done) => {
        const existingUser = await User.findOne({ googleID: profile.id })
            if ( existingUser ) {
                return done(null, existingUser);
            }
            const user = await new User({ googleID: profile.id, displayName: profile.displayName }).save()
            done(null, user);
        }
    )
);
