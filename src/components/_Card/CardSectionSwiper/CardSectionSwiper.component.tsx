import { ICardSectionSwiper } from './CardSectionSwiper.d'
import Image from 'next/image'
import styles from './CardSectionSwiper.module.css'

const CardSectionSwiper: React.FC<ICardSectionSwiper> = (props) => {
    const { image, url, title } = props

    if (!url) {
        return null
    }

    return (
        <div className={styles.CardSectionSwiper_container}>
            <a
                className={styles.CardSectionSwiper_content}
                href={`/practice-mode/quiz/${url}`}
                data-testid="CardSectionSwiper_component"
            >
                <Image
                    className={styles.CardSectionSwiper_image}
                    // src={`/images/${image}.png`}
                    src={`/images/nothing.png`}
                    alt={image}
                    width={0}
                    height={0}
                    style={{
                        backgroundSize: 'cover',
                        borderRadius: '3px',
                    }}
                />
                <h2 className={styles.CardSectionSwiper_title}>{title}</h2>
            </a>
        </div>
    )
}

export default CardSectionSwiper
