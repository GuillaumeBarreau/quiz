import { Button } from '@/components/_Inputs'
import styles from './Banner.module.css'
import { signIn, signOut } from 'next-auth/react'

const Banner: React.FC = () => {
    return (
        <section className={styles.banner_container}>
            <div className={styles.banner_content}>
                <Button onClick={() => signIn()}>SignIn</Button>
            </div>
        </section>
    )
}

export default Banner
