import {
    NEXT_MONTH, 
    PREV_MONTH, 
    NEXT_YEAR, 
    PREV_YEAR, 
    USE_DAY } from 'actions/actionCreators'
import { MONTH_NAMES } from 'constants'

const initialDate = new Date()
const initialYear = initialDate.getFullYear()
const initialMonth = initialDate.getMonth()
const initialDay = initialDate.getDate()
const initCalendar = createCalendar(initialMonth, initialYear)

const initialState = {
    year: initialYear,
    month: initialMonth,
    day: initialDay,
    calendar: initCalendar
}

function createCalendar(month, year) {
    const numDays = computeNumberOfDaysInMonth(year, month)
    const firstDay = computeFirstDayOfMonth(year, month)
    const matrix = createMatrix(numDays, firstDay)

    return {
        selectedDayOfMonth: 1,
        numDays: numDays,
        firstDay: firstDay,
        month: month,
        monthStr: MONTH_NAMES[month],
        year: year,
        matrix: matrix
    }
}

function computeNumberOfDaysInMonth (year, month) {
  return new Date(year, month + 1, 0).getDate();
}

function computeFirstDayOfMonth (year, month) {
  return new Date(year, month, 1).getDay();
}

function createMatrix (numDays, firstDay) {
  var i = 0;
  var firstRow = [];
  var rows = [firstRow];

  // Space out the first day along the first row
  while (i < firstDay) {
    firstRow.push(null);
    i++;
  }

  // Fill out the remaining dates in row
  var nextDay = 1;
  while (i < 7) {
    firstRow.push(nextDay++);
    i++;
  }

  // Build remaining rows
  while (nextDay <= numDays - 7) {
    let nextRow = [];
    rows.push(nextRow);
    i = 0;
    while (i < 7) {
      nextRow.push(nextDay++);
      i++;
    }
  }

  // Create last row and space out empty days
  if (numDays - nextDay >= 0) {
    let lastRow = [];
    rows.push(lastRow);
    i = 0;
    while (nextDay <= numDays) { 
      lastRow.push(nextDay++);
      i++;
    }
    while (i < 7) {
      lastRow.push(null);
      i++;
    }
  }
  return rows;
}

function calendar(state = initialState, action) {
    console.log("init", initialState)
    let year = state.year
    let month = state.month
    let day = state.day
    let calendar = state.calendar
    switch (action.type) {
        case NEXT_MONTH:
            if ( month == 11) {
                month = 0
                year ++
            } else {
                month ++
            }
            calendar = createCalendar(month, year)

            return Object.assign({}, state, {
                year: year,
                month: month,
                day: day,
                calendar: calendar
            })
        case PREV_MONTH:
            if ( month == 0 ) {
                month = 11
                year --
            } else {
                month --
            }

            return Object.assign({}, state, {
                year: year,
                month: month,
                day: day,
                calendar: createCalendar(month, year)
            })
        case USE_DAY:
            return state
        default:
            return state;
    }
}

export default calendar;