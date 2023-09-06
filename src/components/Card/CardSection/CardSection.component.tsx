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
            <a className={styles.cardSection_content}>
                <Image
                    className={styles.cardSection_image}
                    src={image.src}
                    alt={image.alt}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                />
            </a>
        </div>
    )
}

export default CardSection
