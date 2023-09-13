'use client'

import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import Loader from '@/components/Loader/Loader.component'
import Banner from '@/components/Banner'
import styles from './page.module.css'

export default function Home() {
    const { data: session, status } = useSession()

    if (status === 'loading') {
        return <Loader />
    }

    return (
        <main className={styles.page_container}>
            {session && redirect('/home')}
            <Banner />
        </main>
    )
}
