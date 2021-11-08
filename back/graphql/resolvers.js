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