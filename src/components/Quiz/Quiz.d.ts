import { IQuestion } from '@/types';

export interface IQuiz {
    questionsArray: IQuestion[];
    questionsNumber: number
    quizName: string
}
