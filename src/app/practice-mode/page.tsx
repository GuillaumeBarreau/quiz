import Categories from '@/components/Categories/Categories.component'
import styles from './page.module.css'
import Sections from '@/components/Sections/Sections.component'
import trainingConfig from '@/training.config.json'
import { ITrainingConfig } from '@/types'

import 'swiper/swiper-bundle.css'
import 'swiper/css/autoplay'
import 'swiper/css/a11y'
import 'swiper/css/effect-fade'

const typedTrainingConfig = trainingConfig as unknown as ITrainingConfig

const Page: React.FC = () => {
    return (
        <div className={styles.home_container}>
            <Categories categories={trainingConfig.categoriesList} />
            {trainingConfig?.categoriesList?.map?.((category) => {
                return (
                    <Sections
                        key={category}
                        title={category}
                        dataConfig={typedTrainingConfig.dataConfig?.[category]}
                    />
                )
            })}
        </div>
    )
}

export default Page
