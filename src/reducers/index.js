import { combineReducers } from "redux";

import trips from './trips'
import destination from './destination'
import myAccount from './myAccount'

export default combineReducers({
    trips,
    destination,
    myAccount
})