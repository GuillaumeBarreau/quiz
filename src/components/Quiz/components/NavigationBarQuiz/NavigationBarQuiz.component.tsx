import { INavigationBarQuiz } from './NavigationBarQuiz'
import styles from './NavigationBarQuiz.module.css'

const NavigationBarQuiz: React.FC<INavigationBarQuiz> = ({ count }) => {
    return (
        <div
            id="NavigationBarQuiz-component"
            className={styles.navigationBarQuizWrapper}
        >
            <ul className={styles.navigationBarQuizContent}>
                {Array(count)
                    .fill('')
                    .map((_, index) => {
                        return (
                            <li
                                className={styles.navigationBarQuizItem}
                                key={index}
                            >
                                {++index}
                            </li>
                        )
                    })}
            </ul>
        </div>
    )
}

export default NavigationBarQuiz
