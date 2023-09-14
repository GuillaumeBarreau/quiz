'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { ISection } from './Section.d'
import { A11y } from 'swiper/modules'
import styles from './Section.module.css'
import CardSection from '../Card/CardSection'

const swiperModules = [A11y]

const Section: React.FC<ISection> = (props) => {
    const { title, dataConfig } = props

    if (!dataConfig?.length) {
        return null
    }

    return (
        <div className={styles.section_container} id={title}>
            <h2 className={styles.section_title}>{title}</h2>
            <Swiper
                className={styles.section_swiper}
                modules={swiperModules}
                id="swiper-color"
                slidesPerView={4.4}
                spaceBetween={20}
                slidesOffsetBefore={40}
                style={{ padding: '12px' }}
            >
                {dataConfig?.map?.((data) => {
                    return (
                        <SwiperSlide
                            key={data.shortTitle}
                            style={{ listStyle: 'none' }}
                        >
                            <CardSection
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

export default Section
