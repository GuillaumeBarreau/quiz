'use client'
import { useState } from 'react'
import styles from './Quiz.module.css'
import Header from '@/components/Quiz/Header'
import { EAnswerStatus, TAnswers, TCorrectAnswers } from '@/types'
import { IQuiz } from '@/components/Quiz/Quiz.d'
import QuizResults from '@/components/Quiz/QuizResults/QuizResults.component'
import QuizAnswers from '@/components/Quiz/QuizAnswers/QuizAnswers.component'

const Quiz: React.FC<IQuiz> = ({
    questionsArray,
    questionsNumber,
    quizName,
}) => {
    const [stateQuestionNumber, setStateQuestionNumber] = useState<number>(0)
    const [stateStatusShown, setStateStatusShown] = useState<boolean>(false)
    const [stateCurrentQuestionCorrect, setStateCurrentQuestionCorrect] =
        useState<boolean>(false)
    const [stateAnswers, setStateAnswers] = useState<TAnswers>([])
    const [stateQuestionsIndexError, setStateQuestionsIndexError] = useState<
        number[]
    >([])

    const questions = questionsArray?.length > 0
    const isLastQuestion = stateQuestionNumber === questionsArray?.length
    const switchQuestionWithCorrectAnswer = 1000
    const switchQuestionWithWrongAnswer = 2000

    const compareArrays = (
        correctAnswers: TCorrectAnswers,
        answers: TAnswers
    ) => {
        if (correctAnswers.length !== answers.length) {
            return false
        }

        const uniqueValues = new Set(correctAnswers)

        return answers.every((answer) => uniqueValues.has(answer))
    }

    const setStatus = (status: EAnswerStatus) => {
        const timer =
            status === EAnswerStatus.Correct
                ? switchQuestionWithCorrectAnswer
                : switchQuestionWithWrongAnswer 

        if (status === EAnswerStatus.Correct) {
            setStateCurrentQuestionCorrect(true)
        } else {
            setStateCurrentQuestionCorrect(false)
            setStateQuestionsIndexError((questionsIndexError) => [
                ...questionsIndexError,
                questionsArray[stateQuestionNumber].position,
            ])
        }

        setTimeout(() => {
            switchQuestion()
        }, timer)
    }

    const switchQuestion = () => {
        setStateStatusShown(false)
        setStateAnswers([])
        setStateQuestionNumber((prevNumber) =>
            prevNumber < questionsNumber ? prevNumber + 1 : prevNumber
        )
    }

    const handleClickInputSelectAnswers = (answer: string) => {
        const index = stateAnswers?.indexOf?.(answer)

        if (index !== -1) {
            const newArray = [...stateAnswers]
            newArray.splice(index, 1)
            setStateAnswers(newArray)
        } else {
            setStateAnswers((answers) => [...answers, answer])
        }
    }

    const handleClickButtonSubmit = () => {
        setStateStatusShown(true)

        const correctAnswer =
            questionsArray?.[stateQuestionNumber]?.correctAnswer

        compareArrays(correctAnswer, stateAnswers)
            ? setStatus(EAnswerStatus.Correct)
            : setStatus(EAnswerStatus.Wrong)
    }

    return (
        <div className={styles.quiz_container}>
            <Header
                currentQuestion={stateQuestionNumber}
                maxQuestions={questionsArray.length}
                course={quizName}
            />
            {questions && (
                <QuizAnswers
                    handleClickInputSelectAnswers={
                        handleClickInputSelectAnswers
                    }
                    stateQuestionNumber={stateQuestionNumber}
                    handleClickButtonSubmit={handleClickButtonSubmit}
                    questionsArray={questionsArray}
                    stateCurrentQuestionCorrect={stateCurrentQuestionCorrect}
                    selectAnswers={stateAnswers}
                    stateStatusShown={stateStatusShown}
                    answers={stateAnswers}
                />
            )}
            {questions && isLastQuestion && (
                <QuizResults
                    questionsArray={questionsArray}
                    questionsIndexError={stateQuestionsIndexError}
                />
            )}
        </div>
    )
}

export default Quiz
