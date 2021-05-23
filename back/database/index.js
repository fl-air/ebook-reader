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
    // if table is already exi