import Quiz from '@/components/Quiz/Quiz'

async function getData(quizName: string) {
    const vercel_public_domain = process.env.NEXT_PUBLIC_VERCEL_URL
    const node_prod_env = process.env.NODE_ENV === 'production'

    const DOMAIN =
        vercel_public_domain ??
        (node_prod_env
            ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
            : `http://${process.env.DB_HOST}:${process.env.DB_PORT}`)

    const questionsFetch = await fetch(`${DOMAIN}/api/quiz/${quizName}`)

    const questions = await questionsFetch.json()

    return {
        questions,
        domain: `${DOMAIN}/api/quiz/${quizName}`,
    }
}

const Page: React.FC<{ params: { slug: string } }> = async ({ params }) => {
    const quizName = params?.slug
    const { questions, domain } = await getData(quizName)

    if (!questions) {
        return <p>Not data found</p>
    }

    return (
        <>
            <p>{domain}</p>
            <Quiz
                questionsArray={questions?.data}
                questionsNumber={questions?.data?.length}
            />
        </>
    )
}

export default Page
