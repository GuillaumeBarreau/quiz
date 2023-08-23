import Quiz from '@/components/Quiz/Quiz'

async function getData(quizName: string) {
    const questionsFetch = await fetch(
        `http://127.0.0.1:3001/api/quiz/${quizName}`
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
