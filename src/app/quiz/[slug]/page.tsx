import Quiz from '@/components/Quiz/Quiz'

async function getData(quizName: string) {
    const vercel_public_domain = process.env.NEXT_PUBLIC_VERCEL_URL
    const node_prod_env = process.env.NODE_ENV === 'production'

    const DOMAIN =
        vercel_public_domain ??
        (node_prod_env
            ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
            : `https://${process.env.DB_HOST}:${process.env.DB_PORT}`)

    const questionsFetch = await fetch(
        `quiz-git-fix-buildenv-guillaumebarreau.vercel.app/api/quiz/professional-scrum-developer-1/api/quiz/${quizName}`
    )

    const questions = await questionsFetch.json()

    return {
        questions,
        domainA: DOMAIN,
        domainB: process.env.NEXT_PUBLIC_VERCEL_URL,
        domainC:
            'http://quiz-hgckelvsq-guillaumebarreau.vercel.app/api/quiz/professional-scrum-developer-1',
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
