'use client'
import { useState } from 'react'
import styles from './Quiz.module.css'
import Answer from '@/components/Answer'
import Status from '@/components/Status'
import Header from '@/components/Header'

const Quiz = ({ questionsArray, questionsNumber }: any) => {
    const [questionNumber, setQuestionNumber] = useState(0)
    const [numCorrect, setNumCorrect] = useState(0)
    const [statusShown, setStatusShown] = useState(false)
    const [currentQuestionCorrect, setCurrentQuestionCorrect] = useState(false)
    const [setAnswers, setSetAnswers] = useState([])

    const switchQuestionWithCorrectAnswer = 1000
    const switchQuestionWithWrongAnswer = 2000

    const compareArrays = (correctAnswers, answers) => {
        if (correctAnswers.length !== answers.length) {
            return false
        }

        const uniqueValues = new Set(correctAnswers)

        return answers.every((answer) => uniqueValues.has(answer))
    }

    const handleClickSelectAnswers = (answer) => {
        const index = setAnswers.indexOf(answer)
        if (index !== -1) {
            const newArray = [...setAnswers]
            newArray.splice(index, 1)
            setSetAnswers(newArray)
        } else {
            setSetAnswers([...setAnswers, answer])
        }
    }

    const setStatus = (status) => {
        const timer =
            status === 'correct'
                ? switchQuestionWithCorrectAnswer
                : switchQuestionWithWrongAnswer *
                  questionsArray[questionNumber].correctAnswer.length

        if (status === 'correct') {
            setNumCorrect(numCorrect + 1)
            setCurrentQuestionCorrect(true)
        } else {
            setCurrentQuestionCorrect(false)
        }

        setTimeout(() => {
            switchQuestion()
        }, timer)
    }

    const switchQuestion = () => {
        setStatusShown(false)
        setSetAnswers([])
        setQuestionNumber((prevNumber) =>
            prevNumber < questionsNumber ? prevNumber + 1 : prevNumber
        )
    }

    const handleButtonClick = () => {
        setStatusShown(true)

        const correctAnswer = questionsArray[questionNumber].correctAnswer

        compareArrays(correctAnswer, setAnswers)
            ? setStatus('correct')
            : setStatus('wrong')
    }

    const question = questionsArray[questionNumber].question
    const optionAnswers = questionsArray[questionNumber].answers
    const correctAnswer = questionsArray[questionNumber].correctAnswer
    const indexAnswer = questionsArray[questionNumber].position

    return (
        <div className="min-h-screen p-8 flex flex-col justify-between items-center relative">
            <Header
                currentQuestion={questionNumber}
                maxQuestions={questionsNumber}
                course={'Professional Scrum Developer I'}
            />
            <div className="mt-16 mb-16">
                <h1 className="text-xl">{question}</h1>
                <br />
            </div>
            <div>
                <Answer
                    handleClickSelectAnswers={handleClickSelectAnswers}
                    optionAnswers={optionAnswers}
                    selectAnswers={setAnswers}
                    correctAnswer={correctAnswer}
                    statusShown={statusShown}
                    indexAnswer={indexAnswer}
                />
            </div>
            {!statusShown ? (
                <button
                    onClick={handleButtonClick}
                    disabled={setAnswers.length === 0}
                    className={styles.quizButton}
                >
                    {setAnswers.length === 0 ? 'Select an answer' : 'Submit'}
                </button>
            ) : (
                <Status correct={currentQuestionCorrect} />
            )}
        </div>
    )
}

export default Quiz
