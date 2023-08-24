
import { NextApiRequest, NextApiResponse } from 'next'
import { getFileData } from '../../api.utils'
const dataFilePath = "data/GCP_ACE/index.json"

export async function GET(req: Request, res: NextApiResponse) {
    const questionCount = 80
    return getFileData(req, res, dataFilePath, questionCount)
}
