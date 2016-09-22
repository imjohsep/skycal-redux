import React from 'react';

import { render } from 'react-dom';

// Import css
import css from 'styles/common.sass';

// Import Components
import App from 'components/App'; // *
// import Main from './components/Main';
import Calendar from 'components/Calendar';
// import Day from './components/Day';
import EventList from 'components/EventList';

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, {history} from 'store';

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
