import { ICategoryCard } from './CategoryCard.d'
import Image from 'next/image'
import styles from './CategoryCard.module.css'

const CategoryCard: React.FC<ICategoryCard> = (props) => {
    const { category } = props

    if (!category) {
        return null
    }

    return (
        <div className={styles.CategoryCard_container}>
            <a
                className={styles.CategoryCard_content}
                href={`#${category}`}
                data-testid="CategoryCard_component"
            >
                <Image
                    src={'/images/nothing.png'}
                    alt={category}
                    width={0}
                    height={0}
                    style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '3px',
                    }}
                />
                <h2 className={styles.CategoryCard_title}>{category}</h2>
            </a>
        </div>
    )
}

export default CategoryCard
