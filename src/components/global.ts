export type TAnswer =  string

export type TAnswers =  TAnswer[]

export type TSelectAnswers =  TAnswer[]

export type TOptionAnswers =  TAnswer[]

export type TCorrectAnswers = TAnswer[]

export type THandleClickSelectAnswers = (answer: TAnswer) => void

export type THandleClickNextQuestion = () => void

export enum EAnswerStatus {
  Correct = "correct",
  Wrong = "wrong"
}

export interface IQuestion {
    position: number,
    question: TAnswer,
    answers: TAnswers,
    correctAnswer: TCorrectAnswers
}