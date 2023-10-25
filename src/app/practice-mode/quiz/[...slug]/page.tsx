'use client'

import Quiz from '@/components/Quiz/Quiz'
import { IQuiz } from './types'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '@/components/Loader'
import { useEffect } from 'react'
import { fetchQuiz } from '@/stores/features/quiz/quiz.utils'

const Page: React.FC<IQuiz> = ({ params }) => {
    const category = params?.slug[0]
    const quizName = params?.slug[1]
    const dispatch = useDispatch()

    useEffect(() => {
        // Appelez fetchQuiz ici avec les paramètres nécessaires
        dispatch(fetchQuiz({ quizName: quizName, category: category }))
    }, [dispatch])

    const questions = useSelector((state) => {
        return state.quizReducer.questions
    })

    if (!questions?.data?.length) {
        return <Loader />
    }

    return (
        <Quiz
            questionsArray={questions?.data}
            questionsNumber={questions?.data?.length}
            quizName={quizName?.split('-').join(' ') ?? 'Quiz'}
        />
    )
}

export default Page
