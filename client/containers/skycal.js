import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import store, {history} from 'store'

import App from './app'
import Calendar from 'components/Calendar'
import EventList from 'components/EventList'

const router = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={EventList}></IndexRoute>
        <Route path="/calendar" component={Calendar} />
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));
