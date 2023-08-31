import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CounterState = {
  value: number;
};

const initialState = {
  value: 0,
} as CounterState;

export const quizReducer = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    reset: () => initialState,
    addReplies: (state) => {
      state.value += 1;
    },
  },
});

export const {
  addReplies,
  reset,
} = quizReducer.actions;

export default quizReducer.reducer;
