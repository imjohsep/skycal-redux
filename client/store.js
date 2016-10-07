import {createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'
import rootReducer from 'reducers/index'
import { selectMonth, fetchEvents, fetchEventsIfNeeded } from 'actions/actionCreators'

const defaultState = {}

const enhancers = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
)

const store = createStore(
    rootReducer,
    defaultState,
    applyMiddleware(thunk)
)

export const history = syncHistoryWithStore(browserHistory, store)

if(module.hot) {
    module.hot.accept('reducers', () => {
        const nextRootReducer = require('reducers/index').default
        store.replaceReducer(nextRootReducer)
    })
}

export default store