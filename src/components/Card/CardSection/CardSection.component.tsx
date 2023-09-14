import { ICardSection } from './CardSection.d'
import Image from 'next/image'
import styles from './CardSection.module.css'

const CardSection: React.FC<ICardSection> = (props) => {
    const { image, url, title } = props

    if (!url) {
        return null
    }

    return (
        <div className={styles.cardSection_container}>
            <a
                className={styles.cardSection_content}
                href={`/practice-mode/quiz/${url}`}
                data-testid="CardSection_component"
            >
                <Image
                    className={styles.cardSection_image}
                    src={`/images/nothing.png`}
                    alt={image}
                    width={0}
                    height={0}
                    style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '3px',
                    }}
                />
                <h2 className={styles.cardSection_title}>{title}</h2>
            </a>
        </div>
    )
}

export default CardSection
