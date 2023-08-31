
import { NextApiResponse } from 'next'
import { getFileData } from '@/app/api/api.utils'
const dataFilePath = "data/PSPO_01/index.json"

export async function GET(req: Request, res: NextApiResponse) {
    const questionCount = 10
    return getFileData(req, res, dataFilePath, questionCount)
}
