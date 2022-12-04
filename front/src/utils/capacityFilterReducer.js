
function capacityFilterReducerWrapper(queryDispatch) {
    const initialCapacity = {adult: 0, teenager: 0, toddler: 0};

    return {
        initialCapacity,
        capacityFilterReducer(state, {type, payload}) {
            console.log('capacityFilterReducer', type, payload);
            switch (type) {
                case 'init': {
                    return initialCapacity;
                }
                case 'query': {
                    queryDispatch({type: 'update', payload: state});
                    return initialCapacity;
                }
                case 'adult': {
                    const newAdult = state.adult + payload;
                    return {adult: newAdult < 0 ? 0 : newAdult, teenager: state.teenager, toddler: state.toddler};
                }
                case 'teenager': {
                    const newTeenager = state.teenager + payload;
                    return {adult: state.adult, teenager: newTeenager < 0 ? 0 : newTeenager, toddler: state.toddler};
                }
                case 'toddler': {
                    const newToddler = state.toddler + payload;
                    return {adult: state.adult, teenager: state.teenager, toddler: newToddler < 0 ? 0 : newToddler};
                }
                default:
                    break;
            }
        }