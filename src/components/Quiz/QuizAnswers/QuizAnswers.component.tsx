import { Button } from '@/components/Inputs/'
import Question from '@/components/Quiz/Question/Question.component'
import Answer from '@/components/Quiz/Answer/Answer.component'
import Status from '@/components/Status/Status.component'
import { IQuizAnswers } from './QuizAnswers.d'
import styles from './QuizAnswers.module.css'

const QuizAnswers: React.FC<IQuizAnswers> = (props) => {
    const {
        questionsArray,
        handleClickInputSelectAnswers,
        stateStatusShown,
        handleClickButtonSubmit,
        answers,
        stateQuestionNumber,
        stateCurrentQuestionCorrect,
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
            <Question question={question} />
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
    )
}

export default QuizAnswers
