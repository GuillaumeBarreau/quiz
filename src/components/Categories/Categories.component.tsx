import React from 'react'
import { ICategories } from './Categories.d'
import styles from './Categories.module.css'
import CardSection from '../Card/CardSection/CardSection.component'

const Categories: React.FC<ICategories> = (props) => {
    const { images } = props

    if (!images.length) {
        return null
    }

    return (
        <div className={styles.categories_container}>
            {images?.map((data) => (
                <CardSection key={data.id} image={data.image} url={data.url} />
            ))}
        </div>
    )
}

export default Categories
