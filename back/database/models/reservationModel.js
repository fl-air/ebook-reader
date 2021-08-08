
function reservationModel(sequelize, DataTypes) {
    return sequelize.define('Reservation', {
        checkIn: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        checkOut: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE,
            default: Date.now()
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE,
            default: Date.now()
        }
    });
}

export {reservationModel};