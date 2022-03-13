
import {GraphQLServer} from 'graphql-yoga';
import {resolvers} from './graphql/resolvers';
import path from 'path';
// db
// cors
import {whitelist} from './cors/whitelist';
// session
import session from 'express-session';
// passport
import passport from './middleware/passport-facebook';
// auth
import jwt from 'jsonwebtoken';
import authenticate from "./middleware/authenticate";

const server = new GraphQLServer({
    typeDefs: "./graphql/schema.graphql",
    resolvers,
    options: {
        static: 'public',
    }
});

// session
server.express.use(session({secret: 'keyboard cat', resave: true, saveUninitialized: true}));

// passport
server.express.use(passport.initialize());
server.express.use(passport.session());

// routing
server.express.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

server.express.get('/test', authenticate);

server.express.get('/auth/facebook', passport.authenticate('facebookLogin'));

server.express.get('/auth/facebook/callback',
    passport.authenticate('facebookLogin', {
        successRedirect: '/login_success',
        failureRedirect: '/login_fail'
    }));

server.express.get('/login_success', ensureAuthenticated, function (req, res) {
    req.user.token = jwt.sign({
            id: req.user.id,
            displayName: req.user.displayName
        },
        process.env.JWT_SECRET,
        {
            expiresIn: '1h',
            issuer: 'einere',
            subject: 'userInfo'
        });
    res.redirect(200, 'http://localhost:3000/');
});
server.express.get('/login_fail', ensureAuthenticated, function (req, res) {
    res.redirect(401, 'http://localhost:3000/');
});

server.express.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
});

function ensureAuthenticated(req, res, next) {
    // 로그인이 되어 있으면, 다음 파이프라인으로 진행
    if (req.isAuthenticated()) {
        return next();
    }
    // 로그인이 안되어 있으면, login 페이지로 진행
    res.redirect('/');
}

server.start({
    endpoint: '/gql',
    playground: '/playground',
    cors: {
        credentials: true,
        origin: whitelist,
        methods: "GET, POST, PATCH, DELETE",
    }
}, () => {
    console.log('graphQL server is running!');
});