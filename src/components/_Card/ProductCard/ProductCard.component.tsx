import { IProductCard } from './ProductCard.types'
import ProductCardImage from './ProductCardImage/ProductCardImage.component'
import ProductCardDetails from './ProductCardDetails/ProductCardDetails.component'
import styles from './ProductCard.module.scss'

const ProductCard = (props: IProductCard) => {
    const { stars, preview, pictureId, reviewCount, averageScore, data } = props

    const ProductCardDetailsProps = {
        stars,
        preview,
        reviewCount,
        averageScore,
        data,
        name: data?.shortTitle,
    }

    const productCardImageProps = {
        src: pictureId || 'default',
        alt: data?.shortTitle || 'default',
    }

    return (
        <a
            className={styles.cardWithText_content}
            href={`/practice-mode/quiz/${data?.url}`}
            data-testid="ProductCard_component"
        >
            <div className={`${styles.productCardWrapper}`}>
                <ProductCardImage {...productCardImageProps} />
                <ProductCardDetails {...ProductCardDetailsProps} />
            </div>
        </a>
    )
}

export default ProductCard
