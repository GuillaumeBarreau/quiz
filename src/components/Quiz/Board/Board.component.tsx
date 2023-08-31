import { IBoard } from './Board.d'
import styles from './Board.module.css'

const Board: React.FC<IBoard> = (props) => {
    const { questionsArray, questionsIndexError, colorValue } = props

    if (!questionsArray?.length) {
        return null
    }

    return (
        <div className="flex flex-wrap mb-5 justify-center">
            {questionsArray.map((question, index) => {
                return (
                    <a
                        key={`link_${question.position}`}
                        href={`#question_${question.position}`}
                        className="m-1"
                    >
                        <div
                            style={{
                                width: '24px',
                                height: '24px',
                            }}
                            className={`${
                                questionsIndexError.includes(question.position)
                                    ? styles[
                                          `board_error_${
                                              colorValue[index] || 'neutral'
                                          }`
                                      ]
                                    : styles[
                                          `board_success_${
                                              colorValue[index] || 'neutral'
                                          }`
                                      ]
                            }`}
                        ></div>
                    </a>
                )
            })}
        </div>
    )
}

export default Board
