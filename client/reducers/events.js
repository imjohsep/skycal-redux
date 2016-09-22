import { combineReducers } from 'redux'
import {
    SELECT_MONTH, INVALIDATE_MONTH, 
    REQUEST_EVENTS, RECEIVE_EVENTS
} from 'actions/actionCreators'

function selectedMonth(state = 0, action) {
    switch(action.type) {
        case SELECT_MONTH:
            return action.month
        default:
            return state
    }
}

function months(state = {
    isFetching: false,
    didInvalidate: false,
    items: []
}, action) {
    switch (action.type) {
        case INVALIDATE_MONTH:
            return Object.assign({}, state, {
                didInvalidate: true
            })
        case REQUEST_EVENTS:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            })
        case RECEIVE_EVENTS:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                items: action.data,
                lastUpdated: action.receivedAt
            })
        default:
            return state
    }
}

function eventsByMonth(state={}, action) {
    switch(action.type) {
        case INVALIDATE_MONTH:
        case RECEIVE_EVENTS:
        case REQUEST_EVENTS:
            return Object.assign({}, state, {
                [action.month]: months(state[action.month], action)
            })
        default:
            return state
    }
}

const events = combineReducers({
    selectedMonth,
    eventsByMonth
})

export default events