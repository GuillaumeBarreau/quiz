import InputCheckboxAnswer from './InputCheckboxAnswer'
import { IAnswer, IGetBorderStyle } from './Answer.d'

const getBorderStyle = ({
    statusShown,
    correctAnswer,
    selectAnswers,
    answer,
}: IGetBorderStyle) => {
    let borderStyle = 'border-transparent'

    if (statusShown) {
        let isAnswerCorrect = correctAnswer.includes(answer)
        let isAnswerSelected = selectAnswers.includes(answer)

        switch (true) {
            case isAnswerSelected && isAnswerCorrect:
                borderStyle = 'border-blue-500'
                break
            case isAnswerSelected:
                borderStyle = 'border-red-500'
                break
            case isAnswerCorrect:
                borderStyle = 'border-yellow-500'
                break
            default:
                break
        }
    }

    return borderStyle
}

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
        <div>
            {optionAnswers.map((answer, index) => {
                const borderStyle = getBorderStyle({
                    statusShown,
                    correctAnswer,
                    selectAnswers,
                    answer,
                })
                return (
                    <InputCheckboxAnswer
                        key={`${index}_${indexAnswer}`}
                        answer={answer}
                        style={{ border: borderStyle }}
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
