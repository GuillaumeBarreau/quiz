
import { NextApiResponse } from 'next'
import { getFileData } from '@/app/api/api.utils'
const dataFilePath = "data/PSM_01/index.json"

export async function GET(req: Request, res: NextApiResponse) {
    const questionCount = 1
    return getFileData(req, res, dataFilePath, questionCount)
}
