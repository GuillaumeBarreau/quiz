import Categories from '@/components/Categories/Categories.component'
import { SwiperHeader } from '@/components/Swiper'
import styles from './page.module.css'
import Section from '@/components/Section/Section.component'

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
        id: '1',
        title: 'Quiz 1',
        url: '/quiz/1',
        description: 'Quiz 1',
        image: {
            id: '1',
            alt: 'Quiz 1',
            src: 'https://drive.google.com/uc?id=1CFRMlxcu7tdbD5UPo1znuMO2x7kKiJXt',
        },
    },
    {
        id: '1',
        title: 'Quiz 1',
        url: '/quiz/1',
        description: 'Quiz 1',
        image: {
            id: '1',
            alt: 'Quiz 1',
            src: 'https://drive.google.com/uc?id=1CFRMlxcu7tdbD5UPo1znuMO2x7kKiJXt',
        },
    },
    {
        id: '1',
        title: 'Quiz 1',
        url: '/quiz/1',
        description: 'Quiz 1',
        image: {
            id: '1',
            alt: 'Quiz 1',
            src: 'https://drive.google.com/uc?id=1CFRMlxcu7tdbD5UPo1znuMO2x7kKiJXt',
        },
    },
    {
        id: '1',
        title: 'Quiz 1',
        url: '/quiz/1',
        description: 'Quiz 1',
        image: {
            id: '1',
            alt: 'Quiz 1',
            src: 'https://drive.google.com/uc?id=1CFRMlxcu7tdbD5UPo1znuMO2x7kKiJXt',
        },
    },
    {
        id: '1',
        title: 'Quiz 1',
        url: '/quiz/1',
        description: 'Quiz 1',
        image: {
            id: '1',
            alt: 'Quiz 1',
            src: 'https://drive.google.com/uc?id=1CFRMlxcu7tdbD5UPo1znuMO2x7kKiJXt',
        },
    },
    {
        id: '1',
        title: 'Quiz 1',
        url: '/quiz/1',
        description: 'Quiz 1',
        image: {
            id: '1',
            alt: 'Quiz 1',
            src: 'https://drive.google.com/uc?id=1CFRMlxcu7tdbD5UPo1znuMO2x7kKiJXt',
        },
    },
]

const section = {
    title: 'Section 1',
    listQuizzes: [
        {
            id: '1',
            title: 'Quiz 1',
            url: '/quiz/1',
            description: 'Quiz 1',
            image: {
                id: '1',
                alt: 'Quiz 1',
                src: 'https://drive.google.com/uc?id=1CFRMlxcu7tdbD5UPo1znuMO2x7kKiJXt',
            },
        },
        {
            id: '2',
            title: 'Quiz 2',
            url: '/quiz/2',
            description: 'Quiz 2',
            image: {
                id: '2',
                alt: 'Quiz 2',
                src: 'https://drive.google.com/uc?id=1CFRMlxcu7tdbD5UPo1znuMO2x7kKiJXt',
            },
        },
        {
            id: '2',
            title: 'Quiz 2',
            url: '/quiz/2',
            description: 'Quiz 2',
            image: {
                id: '2',
                alt: 'Quiz 2',
                src: 'https://drive.google.com/uc?id=1CFRMlxcu7tdbD5UPo1znuMO2x7kKiJXt',
            },
        },
        {
            id: '3',
            title: 'Quiz 3',
            url: '/quiz/3',
            description: 'Quiz 3',
            image: {
                id: '3',
                alt: 'Quiz 3',
                src: 'https://drive.google.com/uc?id=1CFRMlxcu7tdbD5UPo1znuMO2x7kKiJXt',
            },
        },
        {
            id: '4',
            title: 'Quiz 4',
            url: '/quiz/4',
            description: 'Quiz 4',
            image: {
                id: '4',
                alt: 'Quiz 4',
                src: 'https://drive.google.com/uc?id=1CFRMlxcu7tdbD5UPo1znuMO2x7kKiJXt',
            },
        },
    ],
}

const Page: React.FC = () => {
    return (
        <>
            <SwiperHeader images={images} />
            <div className={styles.home_container}>
                <Categories images={categories} />
                <Section
                    title={section.title}
                    listQuizzes={section.listQuizzes}
                />
                <Section
                    title={section.title}
                    listQuizzes={section.listQuizzes}
                />
                <Section
                    title={section.title}
                    listQuizzes={section.listQuizzes}
                />
                <Section
                    title={section.title}
                    listQuizzes={section.listQuizzes}
                />
                <Section
                    title={section.title}
                    listQuizzes={section.listQuizzes}
                />
                <Section
                    title={section.title}
                    listQuizzes={section.listQuizzes}
                />
            </div>
        </>
    )
}

export default Page
