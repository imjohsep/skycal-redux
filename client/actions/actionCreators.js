import fetch from 'isomorphic-fetch'

export const TOGGLE_TRAY = 'TOGGLE_TRAY'

export const NEXT_MONTH = 'NEXT_MONTH'
export const PREV_MONTH = 'PREV_MONTH'
export const NEXT_YEAR = 'NEXT_YEAR'
export const PREV_YEAR = 'PREV_YEAR'
export const USE_DAY = 'USE_DAY'

export const SELECT_MONTH = 'SELECT_MONTH'
export const INVALIDATE_MONTH = 'INVALIDATE_MONTH'

export const REQUEST_EVENTS = 'REQUEST_EVENTS'
export const RECEIVE_EVENTS = 'RECEIVE_EVENTS'

export const REQUEST_DAY_EVENTS = 'REQUEST_DAY_EVENTS'
export const RECEIVE_DAY_EVENTS = 'RECEIVE_DAY_EVENTS'


// TRAY
export function toggleTrayBool(trayActive) {
    return {
        type: TOGGLE_TRAY,
        trayActive
    }
}

export function toggleTray() {
    return (dispatch, getState) => {
        let { trayActive } = getState().calendar
        dispatch(toggleTrayBool(trayActive))
    }
}

// Calendar
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

export function fetchNextMonth() {
    return (dispatch, getState) => {
        dispatch(nextMonth())
        let { year, month } = getState().calendar
        dispatch(fetchEvents(year, month))
    }
}

export function fetchPrevMonth() {
    return (dispatch, getState) => {
        dispatch(prevMonth())
        let { year, month } = getState().calendar
        dispatch(fetchEvents(year, month))
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
export function requestEvents(year, month) {
    return {
        type: REQUEST_EVENTS,
        month,
        year
    }
}

export function receiveEvents(year, month, json) {
    return {
        type: RECEIVE_EVENTS,
        month,
        year,
        data: json,
        receivedAt: Date.now()
    }
}

export function fetchEvents(year, month) {
    return function (dispatch) {
        dispatch(requestEvents(year, month))
        return fetch(`/api/events/grouped/${year}/${month}`)
            .then((response) => response.json())
            .then((json) => dispatch(receiveEvents(year, month, json))
        )
    }
}

// EVENTS ON A GIVEN DAY

export function requestDayEvents(){
    return {
        type: REQUEST_DAY_EVENTS,
    }
}

export function receiveDayEvents(year, month, day, json) {
    return {
        type: RECEIVE_DAY_EVENTS,
        year,
        month,
        day,
        data: json
    }
}

export function selectDay(year, month, day) {
    return function(dispatch) {
        dispatch(requestDayEvents())
        fetch(`api/event/${year}/${month}/${day}`)
        .then((response) => response.json())
        .then((json) => dispatch(receiveDayEvents(year, month, day, json)))
    }
}