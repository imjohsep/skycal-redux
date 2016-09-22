import fetch from 'isomorphic-fetch'

export const NEXT_MONTH = 'NEXT_MONTH'
export const PREV_MONTH = 'PREV_MONTH'
export const NEXT_YEAR = 'NEXT_YEAR'
export const PREV_YEAR = 'PREV_YEAR'
export const USE_DAY = 'USE_DAY'

export const SELECT_MONTH = 'SELECT_MONTH'
export const INVALIDATE_MONTH = 'INVALIDATE_MONTH'

export const REQUEST_EVENTS = 'REQUEST_EVENTS'
export const RECEIVE_EVENTS = 'RECEIVE_EVENTS'

export function nextMonth(index) {
    return {
        type: NEXT_MONTH,
        index
    }
}

export function prevMonth(index) {
    return {
        type: PREV_MONTH,
        index
    }
}

export function nextYear(index) {
    return {
        type: NEXT_YEAR,
        index
    }
}

export function prevYear(index) {
    return {
        type: PREV_YEAR,
        index
    }
}

export function selectDay(index) {
    return {
        type: SELECT_DAY,
        index
    }
}

// MONTH
export function selectMonth(month) {
    return {
        type: SELECT_MONTH,
        month
    }
}

export function invalidateMonth(month) {
    return {
        type: INVALIDATE_MONTH,
        month
    }
}

// EVENTS
export function requestEvents(month) {
    return {
        type: REQUEST_EVENTS,
        month
    }
}

export function receiveEvents(month, json) {
    return {
        type: RECEIVE_EVENTS,
        month,
        data: json,
        receivedAt: Date.now()
    }
}

export function fetchEvents(month) {
    return function (dispatch) {
        dispatch(requestEvents(month))
        return fetch('http://localhost:7770/api/events/grouped/2016/0')
            .then(response => response.json())
            .then(json => dispatch(receiveEvents(month, json))
        )
    }
}

function shouldFetchEvents(state, month) {
    const events = state.events.eventsByMonth[month]
    if (!events) {
        return true
    } else if (events.isFetching) {
        return false
    } else {
        return events.didInvalidate
    }
}

export function fetchEventsIfNeeded(month) {
    
    // Note that the function also receives getState()
    // which lets you choose what to dispatch next.

    // This is useful for avoiding a network request if
    // a cached value is already available.
    return (dispatch, getState) => {
        if (shouldFetchEvents(getState(), month)) {
            // Dispatch a thunk from thunk!
            return dispatch(fetchEvents(month))
        } else {
            // Let the calling code know there's nothing to wait for.
            return Promise.resolve()
        }
    }
}