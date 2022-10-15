import Logged from './loginDetails'
import Admin from './admin'
import Info from './Info'

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    Log : Logged,
    admin : Admin,
    info : Info
})

export default rootReducer