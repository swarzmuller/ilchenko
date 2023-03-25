import { combineReducers } from "redux";
import { battleReducer } from "./battle/battle.reducer";

const rootReducer = combineReducers({
  battleReducer: battleReducer
});

export default rootReducer;
