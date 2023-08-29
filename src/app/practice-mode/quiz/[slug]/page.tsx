import Quiz from '@/components/Quiz/Quiz'
import { IQuiz } from './quiz.d'

async function getData(quizName: string) {
    const vercel_public_domain = process.env.NEXT_PUBLIC_VERCEL_URL

    const DOMAIN =
        vercel_public_domain ??
        `${process.env.NEXT_PUBLIC_DB_HOST}:${process.env.NEXT_PUBLIC_DB_PORT}`

    try {
        const questionsFetch = await fetch(
            `http://${DOMAIN}/api/practice-mode/quiz/${quizName}`,
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
    const quizName = params?.slug
    const { questions } = await getData(quizName)

    return (
        <Quiz
            questionsArray={questions?.data}
            questionsNumber={questions?.data?.length}
            quizName={quizName?.split('-').join(' ') ?? 'Quiz'}
        />
    )
}

export default Page
