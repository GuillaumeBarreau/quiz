import { VerticalBar } from '@/components/ProgressBar'
import { IHeader } from './Header.d'
import styles from './Header.module.css'

const Header: React.FC<IHeader> = (props) => {
    const { course, maxQuestions, currentQuestion } = props

    return (
        <>
            <div className={styles.header_container}>
                <p className={styles.header_mode}>Practice Test Exam</p>
                {currentQuestion !== maxQuestions && (
                    <div className={styles.header_center}>
                        <p className={styles.header_label}>
                            Question: {currentQuestion + 1} / {maxQuestions}
                        </p>
                    </div>
                )}
                <p className={styles.header_course}>{course}</p>
            </div>
            <VerticalBar
                progress={Math.round(currentQuestion * 100) / maxQuestions}
            />
        </>
    )
}

export default Header
