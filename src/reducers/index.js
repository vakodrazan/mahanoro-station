import { combineReducers } from "redux";

import trips from './trips'
import myAccount from './myAccount'
import selectSeats from "./selectSeats";
import userInformation from "./userInformation";

export default combineReducers({
    trips,
    myAccount,
    selectSeats,
    userInformation
})