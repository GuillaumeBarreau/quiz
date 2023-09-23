import { IAuthButton } from './AuthButton.d'
import styles from './AuthButton.module.css'

const AuthButton = (props: IAuthButton) => {
    const { onClick, disabled, children, network, icon } = props

    return (
        <button
            data-testid="AuthButton_component"
            onClick={onClick}
            disabled={disabled}
            className={`${styles.authButton_container}${
                network ? ` ${styles['authButton_' + network]}` : ''
            }`}
        >
            {icon ?? icon}
            {children ?? children}
        </button>
    )
}

export default AuthButton
