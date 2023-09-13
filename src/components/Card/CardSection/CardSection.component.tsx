import { ICardSection } from './CardSection.d'
import Image from 'next/image'
import styles from './CardSection.module.css'

const CardSection: React.FC<ICardSection> = (props) => {
    const { image, url } = props

    if (!url) {
        return null
    }

    return (
        <div className={styles.cardSection_container}>
            <a
                className={styles.cardSection_content}
                href={`/practice-mode/quiz/${url}`}
            >
                <Image
                    className={styles.cardSection_image}
                    src={`/images/nothing.png`}
                    alt={image}
                    fill
                />
            </a>
        </div>
    )
}

export default CardSection
