
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