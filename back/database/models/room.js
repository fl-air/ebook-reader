
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
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        capacity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        showerRoom: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        options: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    }, {
        timestamps: false,
        createdAt: false,
        updatedAt: false
    });
    Room.associate = function (models) {
        // associations can be defined here
    };
    return Room;
};