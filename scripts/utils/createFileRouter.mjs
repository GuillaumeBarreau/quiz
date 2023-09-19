const createFileRouter = (shortTitle, category) => `
import { NextApiResponse } from 'next'
import { getFileData } from '@/app/api/api.utils'
const dataFilePath = "data/${category}/${shortTitle}/index.json"

export async function GET(req: Request, res: NextApiResponse) {
    const questionCount = 10
    return getFileData(req, res, dataFilePath, questionCount)
}
`
export default createFileRouter
