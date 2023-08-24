import { THandleClickSelectAnswers, TSelectAnswers } from '@/components/global'

export interface IInputCheckboxAnswer {
    answer: string
    selectAnswers: TSelectAnswers
    handleClickSelectAnswers: THandleClickSelectAnswers
    resultInputSelected: any
    disabled: boolean
}
