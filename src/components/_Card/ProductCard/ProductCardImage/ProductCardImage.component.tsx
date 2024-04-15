import { TProductCardImage } from '../ProductCard.types'
import Image from 'next/image'
import styles from './ProductCardImage.module.scss'

const ProductCardImage = (props: TProductCardImage) => {
    const { alt, src } = props

    return (
        <Image
            className={styles.productCardImage}
            width={100}
            height={100}
            alt={alt}
            src={`/images/${src}.png`}
        />
    )
}

export default ProductCardImage
