import styles from './page.module.css'
import { CardSection } from '@/components/_Card'
import trainingConfig from '@/training.config.json'
import { ITrainingConfig } from '@/types'

const typedTrainingConfig = trainingConfig as unknown as ITrainingConfig

const Page = async ({ params }: { params: { slug: string } }) => {
    const category = params?.slug[0]

    return (
        <div className={styles.category_container}>
            {typedTrainingConfig.dataConfig?.[category].map?.(
                (category, index) => {
                    return (
                        <CardSection
                            key={index}
                            image={category.shortTitle}
                            title={category.longTitle}
                            url={category.url}
                        />
                    )
                }
            )}
        </div>
    )
}

export default Page
