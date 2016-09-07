function years(state = [], action) {
    switch(action.type) {
        case 'INCREMENT_YEAR':
            const i = action.index;
            
            // return updated state
            return state;
        case 'DECREMENT_YEAR':
            
            return state;
        default:
            return state;
    }
}

export default years;