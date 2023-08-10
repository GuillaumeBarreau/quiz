import { IInputCheckboxAnswer } from './InputCheckboxAnswer.d'
import styles from './InputCheckboxAnswer.module.css'

const InputCheckboxAnswer: React.FC<IInputCheckboxAnswer> = (props) => {
    const { answer, handleClickSelectAnswers, style, disabled, selectAnswers } =
        props

    return (
        <div
            className={`${styles.inputCheckboxAnswer_container} ${
                style.border ? style.border : ''
            }`}
        >
            <label className={styles.inputCheckboxAnswer_label}>
                <input
                    type="checkbox"
                    className={styles.inputCheckboxAnswer_input}
                    checked={selectAnswers.includes(answer)}
                    onChange={() => handleClickSelectAnswers(answer)}
                    disabled={disabled}
                />
                <span className={styles.inputCheckboxAnswer_text}>
                    {answer}
                </span>
            </label>
        </div>
    )
}

export default InputCheckboxAnswer
