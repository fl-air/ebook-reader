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
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
            callbackURL: "http://localhost:4000/auth/facebook/callback",
        },
        async function (accessToken, refreshToken, profile, cb) {
            const result = await db.User.findOrCreate({
                where: {
                    facebookId: profile.id
                },
                defaults: {
                    facebookId: profile.id,
                    displayName: profile.displayName
                }
            });
            return cb(null, profile);
        }
    ),
);

module.exports = passport;