import styles from './ProductCardDetails.module.scss'
import ProductCardRating from './ProductCardRating/ProductCardRating.component'
import ProductCardText from '../../../Typography/Typography.component'
import { TProductCardDetails } from '../ProductCard.types'

const ProductCardDetails = (props: TProductCardDetails) => {
    const { stars, preview, reviewCount, averageScore, data } = props

    const productCardTextProps = {
        reviewCount,
        averageScore,
        stars,
        name: data?.longTitle,
    }

    return (
        <div className={styles.productCardDetailsWrapper}>
            <ProductCardRating {...productCardTextProps} />
            <ProductCardText fontSize="small">
                {data?.description}
            </ProductCardText>
        </div>
    )
}

export default ProductCardDetails
