import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "./features/Todos/TodoSlice";

export const store = configureStore({
  reducer: {
    Todo: TodoReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
