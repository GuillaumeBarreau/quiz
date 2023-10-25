import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchQuiz } from "./quiz.utils";

interface ICounterState {
    questions: {
        data: [],
    }
};

const initialState: ICounterState = {
    questions: {
        data: [],
    }
};


export const quizReducer = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    reset: () => initialState,
  },
   extraReducers: (builder) => {
    builder.addCase(fetchQuiz.fulfilled, (state, action: PayloadAction<any>) => {
      state.questions.data = (action.payload)
    })
  },
});

export const {
  reset,
} = quizReducer.actions;

export default quizReducer.reducer;
