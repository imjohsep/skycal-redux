import { NEXT_MONTH, PREV_MONTH } from '../actions/actionCreators'

const initialDate = new Date()
const initialYear = initialDate.getFullYear()
const initialMonth = initialDate.getMonth()
const initialDay = initialDate.getDay()

const initialState = {
    calendar: {
        year: initialYear,
        month: initialMonth,
        day: initialDay
    }
}

function calendar(state = initialState, action) {
    let year = initialState.calendar.year
    let month = initialState.calendar.month
    switch (action.type) {
        case NEXT_MONTH:
            if ( month === 11) {
                month = 0
                year ++
            } else {
                month ++
            }
            return Object.assign({}, state.calendar, {
                year: year,
                month: month,
                monthName: monthNames[month]
            })
        case PREV_MONTH:
            if ( month == 0 ) {
                month = 11
                year --
            } else {
                month ++
            }

            return Object.assign({}, state.calendar, {
                year: year,
                month: month,
                monthName: monthNames[month]
            })
        default:
            return state
    }
}

export default calendar