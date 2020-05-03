import { combineReducers } from "redux";
import users from "./userReducer";
import campaigns from "./campaignReducer";

const rootReducer = combineReducers({
  users,
  campaigns,
});

export default rootReducer;
