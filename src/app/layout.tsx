import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ProviderStores } from '@/stores/provider'
import { NextAuthProvider } from './_nextAuth/providers'
import './globals.css'
import styles from './layout.module.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`${inter.className} ${styles.layout_container}`}>
                <NextAuthProvider>
                    <ProviderStores>{children}</ProviderStores>
                </NextAuthProvider>
                <script> </script>
            </body>
        </html>
    )
}
