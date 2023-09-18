import { IInputCheckboxAnswer } from './InputCheckboxAnswer.d'
import styles from './InputCheckboxAnswer.module.css'
import { Checkbox } from '@/components/_Input'

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
            data-testid="InputCheckboxAnswer_component"
            tabIndex={0}
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
            <Checkbox
                label={answer}
                checked={isSelectAnswers}
                onChangeInputChecked={() => handleClickSelectAnswers(answer)}
                disabled={disabled}
            />
        </div>
    )
}

export default InputCheckboxAnswer
