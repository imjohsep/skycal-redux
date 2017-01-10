import { MONTH_NAMES } from 'constants'
import {
    NEXT_MONTH, PREV_MONTH, 
    NEXT_YEAR, PREV_YEAR, 
    SELECT_DAY, RECEIVE_EVENTS,
    TOGGLE_TRAY, REQUEST_DAY_EVENTS,
    RECEIVE_DAY_EVENTS
} from 'actions/actionCreators'

const initialDate = new Date()
const initialYear = initialDate.getFullYear()
const initialMonth = initialDate.getMonth()
const initialDay = initialDate.getDate()
const initCalendar = createCalendar(initialMonth, initialYear)

const initialState = {
    year: initialYear,
    month: initialMonth,
    day: initialDay,
    data: initCalendar,
    isFetching: false,
    didInvalidate: false,
    tray: [],
    trayActive: false,
    events: {}
}

function createCalendar(month, year) {
    const numDays = computeNumberOfDaysInMonth(year, month)
    const firstDay = computeFirstDayOfMonth(year, month)
    const matrix = createMatrix(numDays, firstDay)

    return {
        year,
        month,
        selectedDayOfMonth: 1,
        numDays,
        firstDay,
        monthStr: MONTH_NAMES[month],
        matrix
    }
}

function computeNumberOfDaysInMonth (year, month) {
  return new Date(year, month + 1, 0).getDate()
}

function computeFirstDayOfMonth (year, month) {
  return new Date(year, month, 1).getDay()
}

function createMatrix (numDays, firstDay) {
  var i = 0
  var firstRow = []
  var rows = [firstRow]

  // Space out the first day along the first row
  while (i < firstDay) {
    firstRow.push(null)
    i++
  }

  // Fill out the remaining dates in row
  var nextDay = 1
  while (i < 7) {
    firstRow.push(nextDay++)
    i++
  }

  // Build remaining rows
  while (nextDay <= numDays - 7) {
    let nextRow = []
    rows.push(nextRow)
    i = 0
    while (i < 7) {
      nextRow.push(nextDay++)
      i++
    }
  }

  // Create last row and space out empty days
  if (numDays - nextDay >= 0) {
    let lastRow = []
    rows.push(lastRow)
    i = 0
    while (nextDay <= numDays) { 
      lastRow.push(nextDay++)
      i++
    }
    while (i < 7) {
      lastRow.push(null)
      i++
    }
  }
  return rows
}

function calendar(state = initialState, action) {
    let trayActive = state.trayActive
    let year = state.year
    let month = state.month
    let day = state.day
    let calendar = state.data
    let tray = state.tray

    switch (action.type) {
        case NEXT_MONTH:
            if ( month == 11) {
                month = 0
                year ++
            } else {
                month ++
            }
            calendar = createCalendar(month, year)
            return {
                ...state, 
                year, 
                month,
                day,
                data: calendar
            }

        case PREV_MONTH:
            if ( month == 0 ) {
                month = 11
                year --
            } else {
                month --
            }
            return {
                ...state,
                year,
                month,
                day,
                data: createCalendar(month, year)
            }

        case SELECT_DAY:
            return state

        case RECEIVE_EVENTS:
            return {
                ...state,
                events: action.data
            }

        case REQUEST_DAY_EVENTS:
            return {
                ...state
            }

        case RECEIVE_DAY_EVENTS:
            tray = action.data
            return {
                ...state,
                tray
            }

        case TOGGLE_TRAY:
            trayActive = !trayActive

            return {
                ...state,
                trayActive
            }

        default:
            return state
    }
}

export default calendar