import Categories from '@/components/Categories/Categories.component'
import { SwiperHeader } from '@/components/Swiper'
import styles from './page.module.css'
import Section from '@/components/Section/Section.component'
import trainingConfig from '@/training.config.json'
import { ITrainingConfig } from '@/types'

const typedTrainingConfig = trainingConfig as unknown as ITrainingConfig

const Page: React.FC = () => {
    return (
        <>
            <SwiperHeader images={trainingConfig?.categoriesList} />
            <div className={styles.home_container}>
                <Categories categories={trainingConfig.categoriesList} />
                {trainingConfig?.categoriesList?.map?.((category) => {
                    return (
                        <Section
                            key={category}
                            title={category}
                            dataConfig={
                                typedTrainingConfig.dataConfig?.[category]
                            }
                        />
                    )
                })}
            </div>
        </>
    )
}

export default Page
