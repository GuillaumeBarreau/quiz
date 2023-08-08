import fsPromises from 'fs/promises'
import path from 'path'
import { NextResponse } from 'next/server'
import { generateQuiz } from '@/utils/quiz.utils'
import { NextApiRequest, NextApiResponse } from 'next'

const dataFilePath = path.join(process.cwd(), 'json/PSD_I/index.json')

export async function GET(req: NextApiRequest, res: NextApiResponse) {
    const { query } = req

    if (req.method === 'GET') {
        const jsonData = await fsPromises
            .readFile(dataFilePath)
            .then((data) => {
                return JSON.parse(data.toString())
            })

        const data = generateQuiz(jsonData, 80)

        return NextResponse.json({ data })
    }
}
