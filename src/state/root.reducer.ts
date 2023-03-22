import { combineReducers } from "redux";
import { battleReducer } from "./battle/battle.reducer";
import { popularReducer } from "./popular/popular.reducer";

const rootReducer = combineReducers({
  popularReducer: popularReducer,
  battleReducer: battleReducer
});

export default rootReducer;
