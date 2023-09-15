'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, A11y, Autoplay, EffectFade } from 'swiper/modules'
import Image from 'next/image'
import styles from './SwiperHeader.module.css'
import { ISwiperHeader } from './SwiperHeader'

const swiperModules = [Pagination, A11y, Autoplay, EffectFade]

const SwiperHeader: React.FC<ISwiperHeader> = (props) => {
    const { images } = props
    return (
        <div className={styles.carousel}>
            <Swiper
                className={styles.swiper_content}
                loop={true}
                effect={'fade'}
                autoplay={{
                    delay: 4000,
                }}
                modules={swiperModules}
                id="swiper-color"
                slidesPerView={1}
                spaceBetween={10}
            >
                {images.map((image) => {
                    return (
                        <SwiperSlide
                            key={`slide-${image}`}
                            style={{ listStyle: 'none' }}
                        >
                            <Image
                                className="slide"
                                src={`/images/banner/${image}.png`}
                                width={0}
                                height={0}
                                alt={`Slide ${image}`}
                                sizes="100vw"
                                style={{ width: '100%', height: '300px' }}
                            />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default SwiperHeader
