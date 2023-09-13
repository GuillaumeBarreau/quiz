export type TAnswers =  string[];

export type TSelectAnswers =  string[];

export type TOptionAnswers =  string[];

export type TCorrectAnswers = string[];

export type THandleClickSelectAnswers = (answer: string) => void;

export type THandleClickNextQuestion = () => void;

export enum EAnswerStatus {
  Correct = "correct",
  Wrong = "wrong"
}

export interface IQuestion {
    position: number;
    question: string;
    answers: TAnswers;
    correctAnswer: TCorrectAnswers;
}

export enum EContrastedMode {
  Light = "light",
  Medium = "medium",
  Dark = "dark",
}


export interface IData {
    shortTitle: string;
    url: string;
    description: string;
    longTitle: string;
}

export interface IDataConfig {
  [key: string]: IData[]
}

export interface ITrainingConfig {
  count: number;
  categoriesList: string[];
  dataConfig: IDataConfig;
}
