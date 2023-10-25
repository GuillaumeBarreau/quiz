import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "./features/quiz/quiz.reducer";

export const store = configureStore({
  reducer: {
    quizReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;