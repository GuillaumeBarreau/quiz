'use client'

import Loader from '@/components/Loader/Loader.component'
import { AuthLogin } from '@/components/_Auth'
import { useUser } from '@auth0/nextjs-auth0/client'
import Link from 'next/link'

export default function Home() {
    const { user, error, isLoading } = useUser()

    if (error) return <div>{error.message}</div>

    if (isLoading) return <Loader />

    if (user) {
        console.log('user : ', user)
    }

    return (
        <main>
            {user && <Link href={'/practice-mode'}>practice-mode</Link>}
            <AuthLogin />
        </main>
    )
}
