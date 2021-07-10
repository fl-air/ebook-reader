'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Rooms', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            image: {
                type: Sequelize.STRING
            },
            type: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
         