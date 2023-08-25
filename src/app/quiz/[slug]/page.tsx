import Quiz from '@/components/Quiz/Quiz'

async function getData(quizName: string) {
    const vercel_public_domain = process.env.NEXT_PUBLIC_VERCEL_URL

    const DOMAIN =
        vercel_public_domain ?? `${process.env.DB_HOST}:${process.env.DB_PORT}`

    try {
        const settings = {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        }

        const questionsFetch = await fetch(
            `http://${DOMAIN}/api/quiz/${quizName}`,
            settings
        )
        const questions = await questionsFetch.json()

        return {
            questions,
        }
    } catch (error) {
        return {
            questions: [],
        }
    }
}

const Page: React.FC<{ params: { slug: string } }> = async ({ params }) => {
    const quizName = params?.slug
    const { questions } = await getData(quizName)

    if (!questions) {
        return <p>Not data found</p>
    }

    return (
        <Quiz
            questionsArray={questions?.data}
            questionsNumber={questions?.data?.length}
        />
    )
}

export default Page
