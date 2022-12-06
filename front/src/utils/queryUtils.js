
import queries from "../graphql/queries";

function getProperQuery(filterType) {
    switch (filterType) {
        case 'date':
            return queries.getAvailableRoomsByDate;
        case 'capacity':
            return queries.getAvailableRoomsByCapacity;
        case 'price':
            return queries.getAvailableRoomsByPrice;
    }
}

function getProperQueryParameter(filterType, filterState) {
    switch (filterType) {
        case 'date':
            return {
                checkIn: filterState.checkIn.format('YYYY[-]MM[-]DD'),
                checkOut: filterState.checkOut.format('YYYY[-]MM[-]DD')
            };
        case 'capacity':
            return {capacity: filterState.adult + filterState.teenager};
        case 'price':
            return {minPrice: filterState.minPrice, maxPrice: filterState.maxPrice};
    }
}

function getProperQueryResult(filterType, result) {
    switch (filterType) {
        case 'date':
            return result.data.getAvailableRoomsByDate;
        case 'capacity':
            return result.data.getAvailableRoomsByCapacity;
        case 'price':
            return result.data.getAvailableRoomsByPrice;
    }
}

export {getProperQuery, getProperQueryParameter, getProperQueryResult};