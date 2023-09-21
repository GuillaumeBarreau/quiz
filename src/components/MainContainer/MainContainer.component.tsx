'use client'

import { useState } from 'react'
import NavigationBar from '@/components/NavigationBar'
import styles from './MainContainer.module.css'
import { PropsWithChildren } from '@/types'

const MainContainer: React.FC<PropsWithChildren> = ({ children }) => {
    const [navigationBarIsOpened, setNavigationBarIsOpened] = useState(true)
    const onClickToggleOpenedNavigationBar = () =>
        setNavigationBarIsOpened(
            (navigationBarIsOpened) => !navigationBarIsOpened
        )

    return (
        <main className={styles.mainContainer_wrapper}>
            <NavigationBar
                onClickToggleOpenedNavigationBar={
                    onClickToggleOpenedNavigationBar
                }
                NavigationBarIsOpened={navigationBarIsOpened}
            />
            <div
                className={`${styles.mainContainer_content}${' '}
                    ${
                        navigationBarIsOpened
                            ? styles.mainContainer_contentWithNavigationBarOpened
                            : styles.mainContainer_contentWithNavigationBarClosed
                    }
                `}
            >
                {children}
            </div>
        </main>
    )
}

export default MainContainer
