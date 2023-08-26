'use client'
import { useState, useEffect } from 'react'
import Quiz from '@/components/Quiz/Quiz'

async function getData(quizName: string) {
    const vercel_public_domain = process.env.NEXT_PUBLIC_VERCEL_URL

    const DOMAIN =
        vercel_public_domain ??
        `${process.env.NEXT_PUBLIC_DB_HOST}:${process.env.NEXT_PUBLIC_DB_PORT}`

    try {
        const settings = {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        }

        const questionsFetch = await fetch(
            `http://${DOMAIN}/api/practice-mode/quiz/${quizName}`,
            settings
        )
        const questions = await questionsFetch.json()
        console.log('questions', questions)

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

const Page: React.FC<{ params: { slug: string } }> = ({ params }) => {
    const quizName = params?.slug
    const [data, setData] = useState({
        questions: {
            data: [],
        },
    })

    useEffect(() => {
        const fetchData = async () => {
            const data = await getData(quizName)
            setData(data)
        }
        fetchData()
    }, [quizName])

    return (
        <Quiz
            questionsArray={data.questions?.data}
            questionsNumber={data.questions?.data?.length}
        />
    )
}

export default Page
