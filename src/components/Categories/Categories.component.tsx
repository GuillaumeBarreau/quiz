import React from 'react'
import { ICategories } from './Categories.d'
import styles from './Categories.module.css'
import Category from './Category/Category.component'

const Categories: React.FC<ICategories> = (props) => {
    const { images } = props
    return (
        <div className={styles.categories_container}>
            {images?.map((image) => (
                <Category key={image.id} image={image} />
            ))}
        </div>
    )
}

export default Categories
