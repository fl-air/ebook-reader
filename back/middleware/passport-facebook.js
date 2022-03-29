const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const {db} = require('../database/index');

passport.serializeUser((user, done) => {
    console.log('serializeUser');
    done(null, user);
});

pass