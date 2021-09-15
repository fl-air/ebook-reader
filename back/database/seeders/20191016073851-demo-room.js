'use strict';

const rooms = require('./rooms.json');

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Rooms', rooms, {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Rooms', null, {});

    }
};
