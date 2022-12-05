
function priceFilterReducerWrapper(queryDispatch) {
    const initialPrice = {minPrice: 0, maxPrice: 100000};

    return {
        initialPrice,
        priceFilterReducer(state, {type, payload}) {
            console.log('priceFilterReducer', type, payload);
            switch (type) {
                case 'init': {
                    return initialPrice;
                }
                case 'query': {
                    queryDispatch({type: 'update', payload: state});
                    return initialPrice;
                }
                case 'price': {
                    return {minPrice: payload[0], maxPrice: payload[1]};
                }
                default:
                    break;
            }
        }
    }
}

export default priceFilterReducerWrapper;