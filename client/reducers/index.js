import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import calendar from 'calendars'

const rootReducer = combineReducers({calendar, routing: routerReducer})

export default rootReducer