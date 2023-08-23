import { IQuestion } from './Question.d'
import styles from './Question.module.css'

const Question: React.FC<IQuestion> = (props) => {
    const { question } = props

    return (
        <div className={styles.question_wrapper}>
            <h1 className="text-xl">{question}</h1>
        </div>
    )
}

export default Question
