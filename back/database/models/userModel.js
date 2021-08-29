
function userModel(sequelize, DataTypes) {
    return sequelize.define('User', {
        facebookId: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        displayName: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        timestamps: false,
        createdAt: false,
        updatedAt: false
    });
}

export {userModel};