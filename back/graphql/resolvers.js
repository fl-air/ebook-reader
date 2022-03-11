import {db} from "../database/index";

const {gte, lte, ne, in: opIn, notIn, and, or, between} = db.Sequelize.Op;

const resolvers = {
        Query: {
            getUsers: () => db.User.findAll(),
            getUserById: (_, {id}) => db.User.findByPk(id),
            getRooms: () => db.Room.findAll(),
            getRoomById: (_, {id}) => db.Room.findByPk(id),
            getReservations: () => db.Reservation.findAll(),
            getReservationById: (_, {id}) => db.Reservation.findByPk(id),
            getAvailableRoomsByDate: async (_, {checkIn, checkOut}) => {
                const checkInDate = new Date(checkIn);
                const checkOutDate = new Date(checkOut);
                const rows = await db.Reservation.findAll({
                    attributes: ['id'],
                    where: {
                        [and]: [
                            {
                                [or]: [
                                    {checkin: {[lte]: checkInDate}},
                                    {checkin: {[lte]: checkOutDate}}
                                ]
                            },
                            {
                                [or]: [
                                    {checkOut: {[gte]: checkInDate}},
                                    {checkOut: {[gte]: checkOutDate}}
                                ]
                            }
                        ]
                    }
                });

                return db.Room.findAll({
                    include: [{model: db.Reservation}],
                    where: {
                        id: {[notIn]: rows.map(row => row.id)}
                    }
                });
            },
            getAvailableRoomsByCapacity: (_, {capacity}) => db.Room.findAll({
                where: {
                    capacity: {[gte]: capacity}
                }
            }),
            getAvailableRoomsByPrice: async (_, {minPrice, maxPrice}) => {
                const rows = await db.Reservation.findAll({
                    attributes: ['id']
                });

                return db.Room.findAll({
                    where: {
                        [and]: [
                            {id: {[notIn]: rows.map(row => row.id)}},
                            {price: {[between]: [minPrice, maxPrice]}}
                        ]

                    }
                })
            }
        },
        Mutation: {
            createUser: (_, {facebookId, displayName}) => db.User.create({
                facebookId,
                displayName
            }),
            createRoom: (_, {image, type, title, location, price, capacity, showerRoom, options, host}) => db.Room.create({
                image,
                type,
                title,
                location,
                price,
                capacity,
                showerRoom,
                options,
                host
            }),
            createReservation: (_, {checkIn, checkOut, guest, roomId}) => db.Reservation.create({
                checkIn,
                checkOut,
                guest,
                roomId
            }),
            deleteUser: (_, {id}) => db.User.destroy({
                where: {
                    id
                }
            }),
            deleteRoom: (_, {id}) => db.Room.destroy({
                where: {
                    id
                }
            }),
            deleteReservation: (_, {id}) => db.Reservation.destroy({
                where: {
                    id
                }
            })
        }
    }
;

export {resolvers};