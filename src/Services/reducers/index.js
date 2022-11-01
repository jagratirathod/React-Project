import {combineReducers}   from 'redux'
import cardItems from "./reducer";
// import users from './reducer';

import * as serviceWorker from './serviceWorker';


export default combineReducers({
    cardItems,
});