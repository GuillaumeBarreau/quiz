'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import Link from 'next/link'
import { ISections } from './Sections'
import { A11y } from 'swiper/modules'
import styles from './Sections.module.css'
import { CardWithText } from '../_Card/'

const swiperModules = [A11y]

const Sections: React.FC<ISections> = (props) => {
    const { title, dataConfig } = props

    if (!dataConfig?.length) {
        return null
    }

    return (
        <div className={styles.sections_container} id={title}>
            <Link href={`practice-mode/category/${title}`}>
                <div className={styles.sections_text_content}>
                    <h2 className={styles.sections_title}>{title} - all</h2>
                </div>
            </Link>

            <div className={styles.sections_content}>
                {dataConfig?.map?.((data) => {
                    return (
                        <CardWithText
                            key={data.shortTitle}
                            image={data.shortTitle}
                            title={data.longTitle}
                            url={data.url}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Sections
