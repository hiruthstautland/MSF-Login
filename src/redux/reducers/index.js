import { combineReducers } from "redux";
import users from "./userReducer";
import campaigns from "./campaignReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  users,
  campaigns,
  apiCallsInProgress,
});

export default rootReducer;
