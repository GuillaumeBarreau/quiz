'use client'

import Loader from '@/components/Loader/Loader.component'
import { AuthLogin } from '@/components/_Auth'
import { useUser } from '@auth0/nextjs-auth0/client'

export default function Home() {
    const { user, error, isLoading } = useUser()

    if (error) return <div>{error.message}</div>

    if (isLoading) return <Loader />

    return (
        <main>
            <AuthLogin />
        </main>
    )
}
