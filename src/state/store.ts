import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./root.reducer";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store