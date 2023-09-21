import { ICardWithText } from './CardWithText.d'
import Image from 'next/image'
import styles from './CardWithText.module.css'

const CardWithText: React.FC<ICardWithText> = (props) => {
    const { image, url, title } = props

    if (!url) {
        return null
    }

    return (
        <div className={styles.cardWithText_container}>
            <a
                className={styles.cardWithText_content}
                href={`/practice-mode/quiz/${url}`}
                data-testid="CardWithText_component"
            >
                <Image
                    className={styles.cardWithText_image}
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
                <h2 className={styles.cardWithText_title}>{title}</h2>
            </a>
        </div>
    )
}

export default CardWithText
