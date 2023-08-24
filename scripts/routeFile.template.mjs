const routeFileTemplate = (shortTitle) => `
import { NextApiResponse } from 'next'
import { getFileData } from '../../api.utils'
const dataFilePath = "data/${shortTitle}/index.json"

export async function GET(req: Request, res: NextApiResponse) {
    const questionCount = 80
    return getFileData(req, res, dataFilePath, questionCount)
}
`
export default routeFileTemplate
