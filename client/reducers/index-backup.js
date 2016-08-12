import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Import Reducers
// import posts from './posts';
// import comments from './comments';   
import months from './months';
import weeks from './years';


// Some weirdness around combining reducers
const rootReducer = combineReducers({months, weeks, routing: routerReducer});

export default rootReducer;