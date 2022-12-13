import { combineReducers } from "redux";
import userReducers from "./user";

const RootReducers = combineReducers({
  user: userReducers,
});

export default RootReducers;
