import { IInputCheckboxAnswer } from './InputCheckboxAnswer.d'
import styles from './InputCheckboxAnswer.module.css'

const InputCheckboxAnswer: React.FC<IInputCheckboxAnswer> = (props) => {
    const {
        answer,
        handleClickSelectAnswers,
        resultInputSelected,
        disabled,
        selectAnswers,
    } = props

    const isSelectAnswers = selectAnswers.includes(answer)

    return (
        <div
            className={`${styles.inputCheckboxAnswer_container} ${
                isSelectAnswers
                    ? `${styles.inputCheckboxAnswer_container__selected}`
                    : ''
            }${
                resultInputSelected
                    ? ` ${
                          styles[
                              `inputCheckboxAnswer_container__${resultInputSelected}`
                          ]
                      }`
                    : ''
            }`}
        >
            <label className={styles.inputCheckboxAnswer_label}>
                <input
                    type="checkbox"
                    className={styles.inputCheckboxAnswer_input}
                    checked={isSelectAnswers}
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
