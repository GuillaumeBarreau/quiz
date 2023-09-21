import Quiz from '@/components/Quiz/Quiz'
import { IQuiz } from './types'

async function getData(quizName: string, category: string) {
    const vercel_public_domain = process.env.NEXT_PUBLIC_VERCEL_URL

    const DOMAIN =
        vercel_public_domain ??
        `${process.env.NEXT_PUBLIC_DB_HOST}:${process.env.NEXT_PUBLIC_DB_PORT}`

    try {
        const questionsFetch = await fetch(
            `http://${DOMAIN}/api/practice-mode/quiz/${category}/${quizName}`,
            { cache: 'no-store' }
        )
        const questions = await questionsFetch.json()

        return {
            questions,
        }
    } catch (error) {
        return {
            questions: {
                data: [],
            },
        }
    }
}

const Page: React.FC<IQuiz> = async ({ params }) => {
    const category = params?.slug[0]
    const quizName = params?.slug[1]

    const { questions } = await getData(quizName, category)

    return (
        <Quiz
            questionsArray={questions?.data}
            questionsNumber={questions?.data?.length}
            quizName={quizName?.split('-').join(' ') ?? 'Quiz'}
        />
    )
}

export default Page
