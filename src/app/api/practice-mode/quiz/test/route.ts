
import { NextApiResponse } from 'next'
import { getFileData } from '@/app/api/api.utils'
const dataFilePath = "data/TEST/index.json"

export async function GET(req: Request, res: NextApiResponse) {
    const questionCount = 3
    return getFileData(req, res, dataFilePath, questionCount)
}
