'use client'
import { useState } from 'react'
import styles from './Quiz.module.css'
import Answer from '@/components/Quiz/Answer'
import Status from '@/components/Status'
import Header from '@/components/Quiz/Header'
import Question from '@/components/Quiz/Question'
import Results from '@/components/Quiz/Results/Results.component'
import { EAnswerStatus, TAnswers, TCorrectAnswers } from '@/components/global'
import { IQuiz } from '@/components/Quiz/Quiz.d'

const Quiz: React.FC<IQuiz> = ({ questionsArray, questionsNumber }) => {
    const [questionNumber, setQuestionNumber] = useState<number>(0)
    const [numCorrect, setNumCorrect] = useState<number>(0)
    const [statusShown, setStatusShown] = useState<boolean>(false)
    const [currentQuestionCorrect, setCurrentQuestionCorrect] =
        useState<boolean>(false)
    const [answers, setAnswers] = useState<TAnswers>([])
    const [questionsIndexError, setQuestionsIndexError] = useState<number[]>([])

    const question = questionsArray?.[questionNumber]?.question
    const optionAnswers = questionsArray?.[questionNumber]?.answers
    const correctAnswer = questionsArray?.[questionNumber]?.correctAnswer
    const indexAnswer = questionsArray?.[questionNumber]?.position

    const isLastQuestion = questionNumber === questionsArray.length

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

    const handleClickSelectAnswers = (answer: string) => {
        const index = answers?.indexOf?.(answer)
        if (index !== -1) {
            const newArray = [...answers]
            newArray.splice(index, 1)
            setAnswers(newArray)
        } else {
            setAnswers((answers) => [...answers, answer])
        }
    }

    const setStatus = (status: EAnswerStatus) => {
        const timer =
            status === EAnswerStatus.Correct
                ? switchQuestionWithCorrectAnswer
                : switchQuestionWithWrongAnswer *
                  questionsArray[questionNumber].correctAnswer.length

        if (status === EAnswerStatus.Correct) {
            setNumCorrect((numCorrect) => numCorrect + 1)
            setCurrentQuestionCorrect(true)
        } else {
            setCurrentQuestionCorrect(false)
            setQuestionsIndexError((questionsIndexError) => [
                ...questionsIndexError,
                questionNumber,
            ])
        }

        setTimeout(() => {
            switchQuestion()
        }, timer)
    }

    const switchQuestion = () => {
        setStatusShown(false)
        setAnswers([])
        setQuestionNumber((prevNumber) =>
            prevNumber < questionsNumber ? prevNumber + 1 : prevNumber
        )
    }

    const handleButtonClick = () => {
        setStatusShown(true)

        const correctAnswer = questionsArray?.[questionNumber]?.correctAnswer

        compareArrays(correctAnswer, answers)
            ? setStatus(EAnswerStatus.Correct)
            : setStatus(EAnswerStatus.Wrong)
    }

    return (
        <div className={styles.quiz_container}>
            <Header
                currentQuestion={questionNumber}
                maxQuestions={questionsArray.length}
                course={'Professional Scrum Developer I'}
                isLastQuestion={isLastQuestion}
            />
            {question && (
                <div className={styles.quiz_question_wrapper}>
                    <Question question={question} />
                    <Answer
                        handleClickSelectAnswers={handleClickSelectAnswers}
                        optionAnswers={optionAnswers}
                        selectAnswers={answers}
                        correctAnswer={correctAnswer}
                        statusShown={statusShown}
                        indexAnswer={indexAnswer}
                    />
                    {!statusShown ? (
                        <button
                            onClick={handleButtonClick}
                            disabled={answers.length === 0}
                            className={styles.quizButton}
                        >
                            {answers.length ? 'Submit' : 'Select an answer'}
                        </button>
                    ) : (
                        <Status correct={currentQuestionCorrect} />
                    )}
                </div>
            )}
            {isLastQuestion && (
                <Results
                    numCorrect={numCorrect}
                    questionsArray={questionsArray}
                    questionsIndexError={questionsIndexError}
                />
            )}
        </div>
    )
}

export default Quiz
