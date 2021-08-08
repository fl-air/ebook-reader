function roomModel(sequelize, DataTypes) {
    return sequelize.define('Room', {
        image: {
            type: Da