require('dotenv').config();
import {DataTypes, Sequelize} from 'sequelize';
import {userModel} from "./models/userModel";
import {roomModel} from "./models/roomModel";
import {reservationModel} from "./models/reservationModel";

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_USER_PASSWORD, {
    dialect: 'mysql',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    // if table is already exist, drop the table...
    sync: {
        force: false
    }
});

sequelize.authenticate()
    .then(() => console.log('connection success!'))
    .catch((e) => console.error(e));

const db = {
    Sequelize,
    User: userModel(sequelize, DataTypes),
    Room: roomModel(sequelize, DataTypes),
    Reservation: reservationModel(sequelize, DataTypes)
};

db.User.hasMany(db.Room);
db.Room.belongsTo(db.User, {foreignKey: 'host', onDelete: 'CASCADE'});
db.Room.hasMany(db.Reservation);
db.Reservation.belongsTo(db.Room, {foreignKey: 'reservationRoomId'});
db.User.hasMany(db.Reservation);
db.Reservation.belongsTo(db.User, {foreignKey: 'guest'});

sequelize.sync();

export {db};
