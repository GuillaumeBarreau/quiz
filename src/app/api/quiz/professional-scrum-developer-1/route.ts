
import { NextApiRequest, NextApiResponse } from 'next'
import { getFileData } from '../../api.utils'
const dataFilePath = "data/PSD_01/index.json"

export async function GET(req: Request, res: NextApiResponse) {
    const questionCount = 80
    return getFileData(req, res, dataFilePath, questionCount)
}
