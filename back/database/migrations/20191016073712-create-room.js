'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Rooms', {
            id: {
                allowNull: false,
                autoIncrement: true,
      