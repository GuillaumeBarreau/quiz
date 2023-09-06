'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, A11y, Autoplay } from 'swiper/modules'
import styles from './SwiperSection.module.css'
import { ISwiperSection } from './SwiperSection'
import 'swiper/swiper-bundle.css'
import 'swiper/css/autoplay'
import 'swiper/css/a11y'
import CardSection from '@/components/Card/CardSection/CardSection.component'

const swiperModules = [Pagination, A11y, Autoplay]

const SwiperSection: React.FC<ISwiperSection> = (props) => {
    const { listQuizzes } = props

    return (
        <Swiper
            className={styles.swiper_content}
            modules={swiperModules}
            id="swiper-color"
            slidesPerView={1}
            spaceBetween={10}
        >
            {listQuizzes.map((el) => {
                return (
                    <SwiperSlide
                        key={`slide-${el.id}`}
                        style={{ listStyle: 'none' }}
                    >
                        <CardSection
                            key={el.id}
                            image={el.image}
                            url={el.url}
                        />
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}

export default SwiperSection
