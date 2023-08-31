import { CardFormation } from '@/components/Card'
import styles from './page.module.css'
import trainingConfig from '@/training.config.json'
import { ITrainingConfig } from './practice-mode.d'

const Page: React.FC = () => {
    return (
        <div className={styles.page_container}>
            {trainingConfig?.map((training: ITrainingConfig) => (
                <CardFormation
                    key={training?.url}
                    description={training?.description}
                    longTitle={training?.longTitle}
                    shortTitle={training?.shortTitle}
                    url={training?.url}
                />
            ))}
        </div>
    )
}

export default Page
