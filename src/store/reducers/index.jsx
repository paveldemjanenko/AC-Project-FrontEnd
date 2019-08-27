import { combineReducers } from "redux";
import { reducer as notifications } from "react-notification-system-redux";
import isRegistered from "./registration";
import user from "./user";
import getProductsList from './getProductsList';

const rootReducer = combineReducers({
    notifications,
    isRegistered,
    user,
    getProductsList
});

export default rootReducer;