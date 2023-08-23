import {
    TCorrectAnswers,
    THandleClickSelectAnswers,
    TOptionAnswers,
    TSelectAnswers,
} from '@/components/global'

export interface IAnswer {
    optionAnswers: TOptionAnswers
    correctAnswer: TCorrectAnswers
    selectAnswers: TSelectAnswers
    handleClickSelectAnswers: THandleClickSelectAnswers
    statusShown: boolean
    indexAnswer: number
}

export interface IGetBorderStyle {
    correctAnswer: TCorrectAnswers
    selectAnswers: TSelectAnswers
    statusShown: boolean
    answer: string
}
