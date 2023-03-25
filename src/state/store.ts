import { configureStore } from '@reduxjs/toolkit'
import thunk from "redux-thunk";

import popularReducer from "./popular/popular.slice";

const store = configureStore({
  reducer: {
    popular: popularReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;