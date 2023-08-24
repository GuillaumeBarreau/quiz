import { IQuestion } from '@/components/global'

export interface IResults {
    numCorrect: number
    questionsArray: IQuestion[]
    questionsIndexError: number[]
}
