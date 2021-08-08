
'use strict';
module.exports = (sequelize, DataTypes) => {
    const Room = sequelize.define('Room', {
        image: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        type: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        location: {