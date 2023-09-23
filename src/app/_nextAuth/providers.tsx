import { UserProvider } from '@auth0/nextjs-auth0/client'

type Props = {
    children?: React.ReactNode
}

export const NextAuthProvider = ({ children }: Props) => {
    return <UserProvider>{children}</UserProvider>
}
