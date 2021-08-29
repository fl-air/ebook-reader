
'use strict';
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        timestamps: false,
        createdAt: false,
        updatedAt: false
    });
    User.associate = function (models) {
        // associations can be defined here
    };
    return User;
};