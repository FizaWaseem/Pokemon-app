import { combineReducers } from "@reduxjs/toolkit";
import teamSlice from "./teamSlice";

const rootReducer = combineReducers({
  team: teamSlice,
});

export default rootReducer;
