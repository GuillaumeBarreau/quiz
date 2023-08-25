import Quiz from '@/components/Quiz/Quiz'

async function getData(quizName: string) {
    const vercel_public_domain = process.env.NEXT_PUBLIC_VERCEL_URL
    const node_prod_env = process.env.NODE_ENV === 'production'

    const DOMAIN =
        vercel_public_domain ??
        (node_prod_env
            ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
            : `http://${process.env.DB_HOST}:${process.env.DB_PORT}`)

    try {
        const settings = {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        }

        const questionsFetch = await fetch(
            `${DOMAIN}/api/quiz/${quizName}`,
            settings
        )
        const questions = await questionsFetch.json()

        return {
            questions,
            domain: `${DOMAIN}/api/quiz/${quizName}`,
            domainB: vercel_public_domain,
        }
    } catch (error) {
        return {
            questions: [],
            domain: `${DOMAIN}/api/quiz/${quizName}`,
            domainB: vercel_public_domain,
        }
    }
}

const Page: React.FC<{ params: { slug: string } }> = async ({ params }) => {
    const quizName = params?.slug
    const { questions, domain, domainB } = await getData(quizName)

    if (!questions) {
        return <p>Not data found</p>
    }

    return (
        <>
            <p>{domain}</p>
            <p>{domainB}</p>
            <Quiz
                questionsArray={questions?.data}
                questionsNumber={questions?.data?.length}
            />
        </>
    )
}

export default Page
