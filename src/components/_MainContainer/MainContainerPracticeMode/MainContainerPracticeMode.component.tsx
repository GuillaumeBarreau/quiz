'use client'

import { useState } from 'react'
import styles from './MainContainerPracticeMode.module.css'
import { PropsWithChildren } from '@/types'

const MainContainerPracticeMode: React.FC<PropsWithChildren> = ({
    children,
}) => {
    const [navigationBarIsOpened, setNavigationBarIsOpened] = useState(true)
    const onClickToggleOpenedNavigationBar = () =>
        setNavigationBarIsOpened(
            (navigationBarIsOpened) => !navigationBarIsOpened
        )

    return (
        <main className={styles.mainContainerPracticeMode_wrapper}>
            {children}
        </main>
    )
}

export default MainContainerPracticeMode
