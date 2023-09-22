import { MainContainerPracticeMode } from '@/components/_MainContainer'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <MainContainerPracticeMode>{children}</MainContainerPracticeMode>
}
