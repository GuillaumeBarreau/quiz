import Quiz from '@/components/Quiz/Quiz'

async function getData(quizName: string) {
    const vercel_public_domain = process.env.NEXT_PUBLIC_VERCEL_URL
    const node_prod_env = process.env.NODE_ENV === 'production'

    const DOMAIN =
        vercel_public_domain ??
        (node_prod_env
            ? `http://${process.env.NEXT_PUBLIC_VERCEL_URL}`
            : `http://${process.env.DB_HOST}:${process.env.DB_PORT}`)

    const questionsFetch = await fetch(`${DOMAIN}/api/quiz/${quizName}`)

    const questions = await questionsFetch.json()

    return {
        questions: DOMAIN,
    }
}

const Page: React.FC<{ params: { slug: string } }> = async ({ params }) => {
    const quizName = params?.slug
    const { questions } = await getData(quizName)
    console.log(questions)

    if (!questions) {
        return <p>Not data found</p>
    }

    return null
}

export default Page
