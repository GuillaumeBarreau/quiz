import { ICardCategory } from './CardCategory.d'
import Image from 'next/image'
import styles from './CardCategory.module.css'

const CardCategory: React.FC<ICardCategory> = (props) => {
    const { category } = props

    if (!category) {
        return null
    }

    return (
        <div className={styles.cardCategory_container}>
            <a
                className={styles.cardCategory_content}
                href={`#${category}`}
                data-testid="CardCategory_component"
            >
                <Image
                    src={'/images/nothing.png'}
                    alt={category}
                    width={0}
                    height={0}
                    style={{ width: '100%', height: '100%' }}
                />
            </a>
        </div>
    )
}

export default CardCategory
