import {db} from "../database/index";

const {gte, lte, ne, in: opIn, notIn, and, or, between} = db.Sequelize.Op;

const resolvers = {
        Query: {
            getUsers: () => db.User.findAll(),
            getUserById: (_, {id}) => db.User.findByPk(id),
 