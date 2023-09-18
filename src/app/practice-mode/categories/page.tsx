import Categories from '@/components/Categories/Categories.component'
import styles from './page.module.css'
import trainingConfig from '@/training.config.json'

const Page: React.FC = () => {
    return (
        <div className={styles.home_container}>
            <Categories categories={trainingConfig.categoriesList} />
        </div>
    )
}

export default Page
