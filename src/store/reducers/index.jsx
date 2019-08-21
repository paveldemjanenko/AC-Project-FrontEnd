import { combineReducers } from "redux";
import { reducer as notifications } from "react-notification-system-redux";
import isRegistered from "./registration";

const rootReducer = combineReducers({
    notifications,
    isRegistered
});

export default rootReducer;