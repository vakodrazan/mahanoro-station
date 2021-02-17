import { combineReducers } from "redux";

import trips from './trips'
import myAccount from './myAccount'
import userInformation from "./userInformation";

export default combineReducers({
    trips,
    myAccount,
    userInformation
})