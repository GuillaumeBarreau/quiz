import { IHeader } from './Header.d'
import styles from './Header.module.css'

const Header: React.FC<IHeader> = (props) => {
    const { course } = props

    return (
        <div className={styles.header_container}>
            <p className={styles.header_course}>{course}</p>
        </div>
    )
}

export default Header
