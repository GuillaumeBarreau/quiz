import React from 'react'
import { TCategories } from './Categories.d'
import styles from './Categories.module.css'
import { CategoryCard } from '@/components/_Card'

const Categories: React.FC<TCategories> = (props) => {
    const { categories } = props

    if (!categories.length) {
        return null
    }

    return (
        <div className={styles.categories_container}>
            {categories?.map((category) => (
                <CategoryCard key={category} category={category} />
            ))}
        </div>
    )
}

export default Categories
