export type TAnswer =  string

export type TSelectAnswers =  TAnswer[]

export type TOptionAnswers =  TAnswer[]

export type TCorrectAnswers = TAnswer[]

export type TStatusShown = boolean

export type TIndexAnswer = number

export type THandleClickSelectAnswers = (answer: TAnswer) => void

export type THandleClickNextQuestion = () => void