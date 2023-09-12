import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "@src/redux/bookSlice";

const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
