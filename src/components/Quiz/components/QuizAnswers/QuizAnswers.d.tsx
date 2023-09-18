import { IQuestion, TAnswers } from '@/types'

export interface IQuizAnswers {
    currentQuestion: number
    selectAnswers: any
    stateQuestionNumber: number
    stateCurrentQuestionCorrect: boolean
    questionsArray: IQuestion[]
    stateStatusShown: boolean
    handleClickButtonSubmit: any
    handleClickInputSelectAnswers: any
    answers: TAnswers
}
