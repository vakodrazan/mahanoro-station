import { combineReducers } from "redux";

import trips from './trips'
import myAccount from './myAccount'
import selectSeats from "./selectSeats";

export default combineReducers({
    trips,
    myAccount,
    selectSeats
})