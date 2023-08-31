import { useRouter } from 'next/navigation'
import { Button, ButtonGroup } from '@/components/Inputs/'
import Board from '@/components/Quiz/Board'
import { IQuizResults } from './QuizResults.d'
import styles from './QuizResults.module.css'

const QuizResults: React.FC<IQuizResults> = (props) => {
    const router = useRouter()
    const { questionsArray, questionsIndexError } = props
    const correctAnswers = questionsArray.length - questionsIndexError.length

    if (!questionsArray.length) {
        return null
    }

    const handleButtonClickHome = () => {
        router.push('/practice-mode')
    }

    const handleButtonClickRetry = () => {
        window.location.reload()
    }

    const colors = ['light', 'medium', 'dark']
    const colorValue = questionsArray.map(
        () => colors[Math.floor(Math.random() * colors.length)]
    )

    return (
        <div className={styles.results_container}>
            {isFinite(correctAnswers) && (
                <p className={styles.results_text}>
                    You scored {correctAnswers} out of {questionsArray.length}
                </p>
            )}
            <ButtonGroup orientation>
                <Button onClick={handleButtonClickRetry}>Retry</Button>
                <Button onClick={handleButtonClickHome}>Home</Button>
            </ButtonGroup>

            <Board
                questionsArray={questionsArray}
                questionsIndexError={questionsIndexError}
                colorValue={colorValue}
            />

            {questionsArray.map((question, index) => {
                const isCorrectAnswer = questionsIndexError.includes(
                    question.position
                )

                if (!question?.question && !question.correctAnswer?.length) {
                    return null
                }

                return (
                    <div
                        key={`block_${question.position}`}
                        id={`question_${question.position}`}
                        className={`${styles.results_wrapper} ${
                            isCorrectAnswer
                                ? styles[`results_error_${colorValue[index]}`]
                                : styles[`results_success_${colorValue[index]}`]
                        }`}
                    >
                        <div className={styles.results_question}>
                            <p>{question.question}</p>
                        </div>
                        <div className={styles.results_answer}>
                            {question.correctAnswer.map((answer, index) => (
                                <p key={index} className={styles.results_list}>
                                    {answer}
                                </p>
                            ))}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default QuizResults
