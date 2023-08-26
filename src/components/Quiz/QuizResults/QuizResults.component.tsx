import { useRouter } from 'next/navigation'
import { Button, ButtonGroup } from '@/components/Inputs/'
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
            {questionsArray.map((question, index) => {
                const isCorrectAnswer = questionsIndexError.includes(index)

                if (!question?.question && !question.correctAnswer?.length) {
                    return null
                }

                return (
                    <div
                        key={index}
                        className={`${styles.results_wrapper} ${
                            isCorrectAnswer
                                ? styles.results_wrapper__error
                                : styles.results_wrapper__success
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
