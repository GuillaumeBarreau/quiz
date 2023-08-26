import { PropsWithChildren } from 'react'
import { IButtonGroup } from './ButtonGroup.d'
import styles from './ButtonGroup.module.css'

const ButtonGroup = (props: PropsWithChildren<IButtonGroup>) => {
    const { children } = props

    if (!children) {
        return null
    }

    return <div className={styles.buttonGroup_container}>{children}</div>
}

export default ButtonGroup
