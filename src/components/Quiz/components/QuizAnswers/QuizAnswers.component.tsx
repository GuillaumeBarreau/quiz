import { Button } from '@/components/_Input'
import Status from '@/components/Status/Status.component'
import { IQuizAnswers } from './QuizAnswers.d'
import styles from './QuizAnswers.module.css'
import Question from '../Question/Question.component'
import Answer from '../Answer/Answer.component'

const QuizAnswers: React.FC<IQuizAnswers> = (props) => {
    const {
        questionsArray,
        handleClickInputSelectAnswers,
        stateStatusShown,
        handleClickButtonSubmit,
        answers,
        stateQuestionNumber,
        stateCurrentQuestionCorrect,
        currentQuestion,
    } = props

    const question = questionsArray?.[stateQuestionNumber]?.question
    const optionAnswers = questionsArray?.[stateQuestionNumber]?.answers
    const correctAnswer = questionsArray?.[stateQuestionNumber]?.correctAnswer
    const indexAnswer = questionsArray?.[stateQuestionNumber]?.position

    if (!questionsArray.length || !question) {
        return null
    }

    return (
        <div className={styles.quiz_question_wrapper}>
            <div className={styles.quiz_question_content_left}>
                <Question question={question} />
            </div>
            <div className={styles.quiz_question_content_right}>
                <div className={styles.quiz_question_index}>
                    Question: {currentQuestion + 1} / {questionsArray.length}
                </div>
                <Answer
                    handleClickSelectAnswers={handleClickInputSelectAnswers}
                    optionAnswers={optionAnswers}
                    selectAnswers={answers}
                    correctAnswer={correctAnswer}
                    statusShown={stateStatusShown}
                    indexAnswer={indexAnswer}
                />
                {!stateStatusShown ? (
                    <Button
                        onClick={handleClickButtonSubmit}
                        disabled={answers.length === 0}
                    >
                        {answers.length ? 'Submit' : 'Select an answer'}
                    </Button>
                ) : (
                    <Status correct={stateCurrentQuestionCorrect} />
                )}
            </div>
        </div>
    )
}

export default QuizAnswers
