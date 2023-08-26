import { PropsWithChildren } from 'react'
import { IButton } from './Button.d'
import styles from './Button.module.css'

const Button = (props: PropsWithChildren<IButton>) => {
    const { onClick, disabled, children } = props

    if (!onClick) {
        return null
    }

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={styles.button_container}
        >
            {children}
        </button>
    )
}

export default Button
