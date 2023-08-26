import { IQuestion, TAnswers } from '@/components/global'

export interface IQuizAnswers {
    selectAnswers: any
    stateQuestionNumber: number
    stateCurrentQuestionCorrect: boolean
    questionsArray: IQuestion[]
    stateStatusShown: boolean
    handleClickButtonSubmit: any
    handleClickInputSelectAnswers: any
    answers: TAnswers
}
