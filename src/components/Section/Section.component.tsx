import React from 'react'
import { ISection } from './Section.d'
import styles from './Section.module.css'

const Section: React.FC<ISection> = (props) => {
    const { title, listQuizzes } = props

    if (!listQuizzes.length) {
        return null
    }

    return (
        <div className={styles.section_container}>
            <h2>{title}</h2>
            <div className={styles.section_content}>
                {listQuizzes?.map((quiz) => null)}
            </div>
        </div>
    )
}

export default Section
