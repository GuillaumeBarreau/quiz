import Progress from '@/components/CircularDashedProgress/CircularDashedProgress.component'
import { IHeader } from './Header.d'
import styles from './Header.module.css'

const Header: React.FC<IHeader> = (props) => {
    const { course, maxQuestions, currentQuestion } = props

    return (
        <div className="h-16 mb-4 p-4 w-full px-3 border-b-2 border-slate-700 text-white flex justify-between items-center">
            <div>
                <p className="font-bold text-4xl leading-7">
                    Practice Test Exam
                </p>
            </div>
            {currentQuestion !== maxQuestions && (
                <div className={styles.header_center}>
                    <p className={styles.header_label}>
                        Question: {currentQuestion + 1} / {maxQuestions}
                    </p>
                    <Progress
                        progress={currentQuestion}
                        maxValue={maxQuestions}
                    />
                </div>
            )}
            <div>
                <p className="mr-4">{course}</p>
            </div>
        </div>
    )
}

export default Header
