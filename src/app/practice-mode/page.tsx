import { CardFormation } from '@/components/Card'
import styles from './page.module.css'
import trainingConfig from '@/training.config.json'
import { ITrainingConfig, IConfigGlobal } from './practice-mode.d'

const configGlobal: IConfigGlobal[] = []

const typedTrainingConfig: ITrainingConfig = trainingConfig

typedTrainingConfig?.categoriesList.forEach((category) => {
    typedTrainingConfig.dataConfig[category]?.forEach(
        (training: IConfigGlobal) => {
            configGlobal.push(training)
        }
    )
})

const Page: React.FC = () => {
    return (
        <div className={styles.page_container}>
            {configGlobal.map?.((training) => {
                return (
                    <CardFormation
                        key={training?.url}
                        description={training?.description}
                        longTitle={training?.longTitle}
                        shortTitle={training?.shortTitle}
                        url={training?.url}
                    />
                )
            })}
        </div>
    )
}

export default Page
