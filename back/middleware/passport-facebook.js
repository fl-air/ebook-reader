const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const {db} = require('../database/index');

passport.serializeUser((user, done) => {
    console.log('serializeUser');
    done(null, user);
});

passport.deserializeUser((user, done) => {
    console.log('deserializeUser');
    done(null, user);
});

// 로그인
passport.use(
    'facebookLogin',
    new FacebookStrategy(
        {
            clientID: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FAC