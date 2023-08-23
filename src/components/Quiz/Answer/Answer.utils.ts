import { IGetBorderStyle } from './Answer.d'

export const getResultInputSelected = ({
    statusShown,
    correctAnswer,
    selectAnswers,
    answer,
}: IGetBorderStyle) => {
    let result = ''

    if (statusShown) {
        let isAnswerCorrect = correctAnswer.includes(answer)
        let isAnswerSelected = selectAnswers.includes(answer)

        switch (true) {
            case isAnswerSelected && isAnswerCorrect:
                result = 'success'
                break
            case isAnswerSelected:
                result = 'errorSelected'
                break
            case isAnswerCorrect:
                result = 'errorNotSelected'
                break
            default:
                break
        }
    }

    return result
}