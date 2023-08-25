import Quiz from '@/components/Quiz/Quiz'

async function getData(quizName: string) {
    const vercel_public_domain = process.env.NEXT_PUBLIC_VERCEL_URL
    const node_prod_env = process.env.NODE_ENV === 'production'

    const DOMAIN =
        vercel_public_domain ??
        (node_prod_env
            ? `http://${process.env.NEXT_PUBLIC_VERCEL_URL}`
            : `http://${process.env.DB_HOST}:${process.env.DB_PORT}`)
    console.log('DOMAIN', DOMAIN)
    const questionsFetch = await fetch(
        `https://quiz-o1kkeh5g5-guillaumebarreau.vercel.app/api/quiz/professional-scrum-developer-1`
    )

    const questions = await questionsFetch.json()

    return {
        questions,
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
