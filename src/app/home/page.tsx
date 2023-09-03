import Categories from '@/components/Categories/Categories.component'
import { SwiperHeader } from '@/components/Swiper'
import styles from './page.module.css'

const images = [
    'https://drive.google.com/uc?id=14JFjPPTUK39SpIN77dCBtp4NFQENdred',
    'https://drive.google.com/uc?id=10DSo570bbNPM_2agrvUF9orWZNwU5lnF',
    'https://drive.google.com/uc?id=13rLpwEabENq8k1EDD8onOvoNuDD2Le2x',
    'https://drive.google.com/uc?id=1s500-iTeYkpb1LUBj1W23aAL0fcmHJDp',
    'https://drive.google.com/uc?id=1dXN1Zedwtg_Sy_MsIjdSRHXTWfF8u8dB',
    'https://drive.google.com/uc?id=1Vl-dpwmWcV_eNyPHRIivRJMw_OUy28kE',
]
const categories = [
    {
        src: 'https://drive.google.com/uc?id=1CFRMlxcu7tdbD5UPo1znuMO2x7kKiJXt',
        alt: 'category 1',
        id: '1',
    },
    {
        src: 'https://drive.google.com/uc?id=1CFRMlxcu7tdbD5UPo1znuMO2x7kKiJXt',
        alt: 'category 1',
        id: '2',
    },
    {
        src: 'https://drive.google.com/uc?id=1CFRMlxcu7tdbD5UPo1znuMO2x7kKiJXt',
        alt: 'category 1',
        id: '3',
    },
    {
        src: 'https://drive.google.com/uc?id=1CFRMlxcu7tdbD5UPo1znuMO2x7kKiJXt',
        alt: 'category 1',
        id: '4',
    },
    {
        src: 'https://drive.google.com/uc?id=1CFRMlxcu7tdbD5UPo1znuMO2x7kKiJXt',
        alt: 'category 1',
        id: '5',
    },
]
const Page: React.FC = () => {
    return (
        <>
            <SwiperHeader images={images} />
            <div className={styles.home_container}>
                <Categories images={categories} />
            </div>
        </>
    )
}

export default Page
