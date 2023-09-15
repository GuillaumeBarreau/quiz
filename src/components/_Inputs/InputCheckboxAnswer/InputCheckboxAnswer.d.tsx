import { THandleClickSelectAnswers, TSelectAnswers } from '@/types'

export interface IInputCheckboxAnswer {
    answer: string
    selectAnswers: TSelectAnswers
    handleClickSelectAnswers: THandleClickSelectAnswers
    resultInputSelected: any
    disabled: boolean
}
