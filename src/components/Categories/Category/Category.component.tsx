import React from 'react'
import Image from 'next/image'
import { ICategory } from './Category'
import styles from './Category.module.css'

const Category: React.FC<ICategory> = (props) => {
    const { image } = props

    return (
        <div className={styles.category_container}>
            <Image
                className={styles.category_content}
                src={image.src}
                alt={image.alt}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
            />
        </div>
    )
}

export default Category
