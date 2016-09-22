import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import calendar from 'calendars'
import events from 'events'

const rootReducer = combineReducers({calendar, events, routing: routerReducer});

export default rootReducer;