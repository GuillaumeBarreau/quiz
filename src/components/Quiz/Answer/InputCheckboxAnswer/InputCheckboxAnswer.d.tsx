import {
    TAnswer,
    THandleClickSelectAnswers,
    TSelectAnswers,
} from '@/components/global'

export interface IInputCheckboxAnswer {
    answer: TAnswer
    selectAnswers: TSelectAnswers
    handleClickSelectAnswers: THandleClickSelectAnswers
    style: any
    disabled: boolean
}
