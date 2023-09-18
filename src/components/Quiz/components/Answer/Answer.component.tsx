import InputCheckboxAnswer from '@/components/_Input/InputCheckboxAnswer'
import { IAnswer } from './Answer'
import styles from './Answer.module.css'
import { getResultInputSelected } from './Answer.utils'

const Answer: React.FC<IAnswer> = (props) => {
    const {
        optionAnswers,
        statusShown,
        correctAnswer,
        selectAnswers,
        indexAnswer,
        handleClickSelectAnswers,
    } = props

    return (
        <div className={styles.answer_wrapper} data-testid="Answer_component">
            {optionAnswers?.map((answer, index) => {
                const resultInputSelected = getResultInputSelected({
                    statusShown,
                    correctAnswer,
                    selectAnswers,
                    answer,
                })
                return (
                    <InputCheckboxAnswer
                        key={`${index}_${indexAnswer}`}
                        answer={answer}
                        resultInputSelected={resultInputSelected}
                        disabled={statusShown}
                        selectAnswers={selectAnswers}
                        handleClickSelectAnswers={handleClickSelectAnswers}
                    />
                )
            })}
        </div>
    )
}

export default Answer
