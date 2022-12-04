
function dateFilterReducerWrapper(queryDispatch) {
    const initialDate = {checkIn: undefined, checkOut: undefined};

    return {
        initialDate,
        dateFilterReducer(state, {type, payload}) {
            console.log('dateFilterReducer', type, payload);
            switch (type) {
                case 'init': {
                    return initialDate;
                }
                case 'query': {
                    queryDispatch({type: 'update', payload: state});
                    return initialDate;
                }
                case 'date': {
                    return {checkIn: payload.checkIn, checkOut: payload.checkOut};
                }
                default:
                    break;
            }
        }
    };
}

export default dateFilterReducerWrapper;