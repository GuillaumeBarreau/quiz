import Quiz from '@/components/Quiz/Quiz'

async function getData(quizName: string) {
    const questionsFetch = await fetch(
        `http://localhost:3001/api/generateQuiz/${quizName}`
    )
    const questions = await questionsFetch.json()

    return {
        questions,
        questionsNumber: 10,
    }
}

const Page: React.FC<{ params: { slug: string } }> = async ({ params }) => {
    const quizName = params?.slug
    const { questions, questionsNumber } = await getData(quizName)

    return (
        <Quiz
            questionsArray={questions?.data}
            questionsNumber={questionsNumber}
        />
    )
}

export default Page
