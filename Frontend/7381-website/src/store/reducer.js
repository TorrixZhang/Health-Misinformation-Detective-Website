import { combineReducers } from "redux";
import {reducer as registerReducer} from '../pages/Register/store';
import {reducer as loginReducer} from '../pages/Login/store';


export default combineReducers({
    register: registerReducer,
    login: loginReducer
});
