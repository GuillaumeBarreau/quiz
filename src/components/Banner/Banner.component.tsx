import { signIn } from 'next-auth/react'
import { Button } from '@/components/_Input'
import styles from './Banner.module.css'

const Banner: React.FC = () => {
    return (
        <section className={styles.banner_container}>
            <div className={styles.banner_content}>
                <Button data-testid="Banner_button" onClick={() => signIn()}>
                    SignIn
                </Button>
            </div>
        </section>
    )
}

export default Banner
