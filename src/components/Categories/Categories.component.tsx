import React from 'react'
import { TCategories } from './Categories.d'
import styles from './Categories.module.css'
import { CardCategory } from '@/components/Card'

const Categories: React.FC<TCategories> = (props) => {
    const { categories } = props

    if (!categories.length) {
        return null
    }

    return (
        <div className={styles.categories_container}>
            {categories?.map((category) => (
                <CardCategory key={category} category={category} />
            ))}
        </div>
    )
}

export default Categories
