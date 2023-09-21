import { VerticalBar } from '@/components/_ProgressBar'
import { IHeader } from './Header.d'
import styles from './Header.module.css'

const Header: React.FC<IHeader> = (props) => {
    const { course, maxQuestions, currentQuestion } = props

    return (
        <>
            <div className={styles.header_container}>
                <p className={styles.header_course}>{course}</p>
            </div>
            <VerticalBar
                progress={Math.round(currentQuestion * 100) / maxQuestions}
            />
        </>
    )
}

export default Header
