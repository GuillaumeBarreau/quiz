'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import Link from 'next/link'
import { ISections } from './Sections'
import { A11y } from 'swiper/modules'
import styles from './Sections.module.css'
import { CardSectionSwiper } from '../_Card/'

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
            <Swiper
                className={styles.sections_swiper}
                modules={swiperModules}
                id="swiper-color"
                slidesPerView={4.4}
                slidesOffsetBefore={40}
                style={{ padding: '12px' }}
            >
                {dataConfig?.map?.((data) => {
                    return (
                        <SwiperSlide
                            key={data.shortTitle}
                            style={{ listStyle: 'none' }}
                        >
                            <CardSectionSwiper
                                key={data.shortTitle}
                                image={data.shortTitle}
                                title={data.longTitle}
                                url={data.url}
                            />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default Sections
