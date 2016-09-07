function months(state = [], action) {
    switch(action.type) {
        case 'INCREMENT_MONTH':
            const i = action.index;
            
            // return updated state
            return state;
        case 'DECREMENT_MONTH':

            return state;
        default:
            return state;
    }
}

export default months;