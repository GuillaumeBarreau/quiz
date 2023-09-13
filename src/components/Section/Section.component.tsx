import React from 'react'
import { ISection } from './Section.d'
import styles from './Section.module.css'
import CardSection from '../Card/CardSection'

const Section: React.FC<ISection> = (props) => {
    const { title, dataConfig } = props

    if (!dataConfig?.length) {
        return null
    }

    return (
        <div className={styles.section_container} id={title}>
            <h2 className={styles.section_title}>{title}</h2>
            <div className={styles.section_content}>
                {dataConfig?.map?.((data) => (
                    <CardSection
                        key={data.shortTitle}
                        image={data.shortTitle}
                        url={data.url}
                    />
                ))}
            </div>
        </div>
    )
}

export default Section
