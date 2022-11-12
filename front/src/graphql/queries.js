
import {gql} from "apollo-boost";

const query = {
    getUsers: gql`
        {
            getUsers {
                id,
                facebookId,
                displayName
            }
        }
    `,
    getRooms: gql`
        {
            getRooms {
                id,
                image,
                title,
                capacity,
                showerRoom,
                options
            }
        }
    `,
    getAvailableRoomsByDate: gql`
        query getAvailableRoomsByDate($checkIn: Date!, $checkOut: Date!){
            getAvailableRoomsByDate(checkIn: $checkIn, checkOut: $checkOut){
                id,
                image,
                title,
                capacity,
                showerRoom,
                options
            }
        }
    `,
    getAvailableRoomsByCapacity: gql`
        query getAvailableRoomsByCapacity($capacity: Int!){
            getAvailableRoomsByCapacity(capacity: $capacity) {
                id,
                image,
                title,
                capacity,
                showerRoom,
                options
            }
        }
    `,
    getAvailableRoomsByPrice: gql`
        query getAvailableRoomsByPrice($minPrice: Int!, $maxPrice: Int!){
            getAvailableRoomsByPrice(minPrice: $minPrice, maxPrice: $maxPrice){
                id,
                image,
                title,
                capacity,
                showerRoom,
                options
            }
        }
    `

};


export default query;