import CardFormation from '@/components/Card/CardFormation/CardFormation.component'
import styles from './page.module.css'
import trainingConfig from '@/training.config.json'

const Page: React.FC = () => {
    return (
        <div className={styles.page_container}>
            {trainingConfig.map((training: any) => (
                <CardFormation
                    key={training.url}
                    description={training.description}
                    longTitle={training.longTitle}
                    shortTitle={training.shortTitle}
                    url={training.url}
                />
            ))}
        </div>
    )
}

export default Page
