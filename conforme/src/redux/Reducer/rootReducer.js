import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import UserReducer from "./UserReducer";
import ProjReducer from "./ProjReducer";

export default combineReducers({ AuthReducer, UserReducer, ProjReducer });
