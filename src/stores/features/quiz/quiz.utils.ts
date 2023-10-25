import { createAsyncThunk } from "@reduxjs/toolkit"

const vercel_public_domain = process.env.NEXT_PUBLIC_VERCEL_URL
const DOMAIN =
        vercel_public_domain ??
        `${process.env.NEXT_PUBLIC_DB_HOST}:${process.env.NEXT_PUBLIC_DB_PORT}`

export const fetchQuiz = createAsyncThunk(
  'quiz/initQuiz', async ({quizName, category}: {quizName: string, category: string}) => {

    try {
        const questionsFetch = await fetch(
            `http://${DOMAIN}/api/practice-mode/quiz/${category}/${quizName}`,
            { cache: 'no-store' }
        )
        const questions = await questionsFetch.json()

        return questions.data
    } catch (error) {
        return []
    }
  } 
)