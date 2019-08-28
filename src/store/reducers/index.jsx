import { combineReducers } from "redux";
import { reducer as notifications } from "react-notification-system-redux";
import isRegistered from "./registration";
import user from "./user";
import getProductsList from './getProductsList';
import getProductList from './getProductList';
import comments from './comments';

const rootReducer = combineReducers({
    notifications,
    isRegistered,
    user,
    getProductsList,
    getProductList,
    comments
});

export default rootReducer;