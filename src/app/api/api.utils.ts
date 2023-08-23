import fsPromises from 'fs/promises'
import path from 'path'
import { NextResponse } from 'next/server'
import { generateQuiz } from '@/utils/quiz.utils'
import { NextApiRequest, NextApiResponse } from 'next'

export const getFileData = async  (req: NextApiRequest, res: NextApiResponse, dataFilePath: string, questionsCount: number) => {

    if (!dataFilePath) {
        return null
    }
    
    const file = path.join(process.cwd(), dataFilePath)
    
    if (!file) {
        return null
    }

    if (req.method === 'GET') {
        const jsonData = await fsPromises
            .readFile(file)
            .then((data) => {
                return JSON.parse(data.toString())
            })

        const data = generateQuiz(jsonData, questionsCount)

        return NextResponse.json({ data })
    }
}