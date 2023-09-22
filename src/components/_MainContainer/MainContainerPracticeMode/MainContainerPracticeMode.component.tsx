'use client'

import { useState } from 'react'
import NavigationBar from '@/components/NavigationBar'
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
            <NavigationBar
                onClickToggleOpenedNavigationBar={
                    onClickToggleOpenedNavigationBar
                }
                NavigationBarIsOpened={navigationBarIsOpened}
            />
            <div
                className={`${styles.mainContainerPracticeMode_content}${' '}
                    ${
                        navigationBarIsOpened
                            ? styles.mainContainerPracticeMode_contentWithNavigationBarOpened
                            : styles.mainContainerPracticeMode_contentWithNavigationBarClosed
                    }
                `}
            >
                {children}
            </div>
        </main>
    )
}

export default MainContainerPracticeMode
