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
                const checkOutDate = new D