import React from 'react'
import { ISection } from './Section.d'
import styles from './Section.module.css'
import CardSection from '../Card/CardSection'

const Section: React.FC<ISection> = (props) => {
    const { title, listQuizzes } = props

    if (!listQuizzes.length) {
        return null
    }

    return (
        <div className={styles.section_container}>
            <h2 className={styles.section_title}>{title}</h2>
            <div className={styles.section_content}>
                {listQuizzes?.map((quiz) => (
                    <CardSection
                        key={quiz.id}
                        image={quiz.image}
                        url={quiz.url}
                    />
                ))}
            </div>
        </div>
    )
}

export default Section
