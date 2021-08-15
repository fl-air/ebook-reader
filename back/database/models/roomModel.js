function roomModel(sequelize, DataTypes) {
    return sequelize.define('Room', {
        image: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        type: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        title: 