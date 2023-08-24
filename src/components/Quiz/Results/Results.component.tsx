import { IResults } from './Results.d'
import styles from './Results.module.css'

const Results: React.FC<IResults> = (props) => {
    const { numCorrect, questionsArray, questionsIndexError } = props

    if (!questionsArray.length) {
        return null
    }

    return (
        <div className={styles.results_container}>
            {isFinite(numCorrect) && (
                <p className={styles.results_text}>
                    You scored {numCorrect} out of {questionsArray.length}
                </p>
            )}
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

export default Results
