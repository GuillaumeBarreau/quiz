import { MainContainerPracticeMode } from '@/components/_MainContainer'
// import { useUser } from '@auth0/nextjs-auth0/client'

function RootLayout({ children }: { children: React.ReactNode }) {
    // const { user, isLoading } = useUser()
    // console.log('user : ', user)

    return (
        <>
            <MainContainerPracticeMode>{children}</MainContainerPracticeMode>
        </>
    )
}

export default RootLayout
