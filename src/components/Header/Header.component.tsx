import styles from './Header.module.scss'
import StaycationLogo from './StaycationLogo'

interface IHeader {
    user: {
        firstName: string
    }
}

const Header: React.FC<IHeader> = (props) => {
    const { user } = props

    return (
        <div className={styles.headerWrapper}>
            <div className={styles.headerContent}>
                <StaycationLogo color="#F36" />
                {user?.firstName && (
                    <div className={styles.headerText}>
                        Welcome, {user.firstName}!
                    </div>
                )}
            </div>
        </div>
    )
}

export default Header
