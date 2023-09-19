import createFileRouter from './createFileRouter.mjs'

describe('createFileRouter', () => {
    it('should create a file router', () => {
        const shortTitle = 'test-file'
        const category = 'test-category'

        const result = createFileRouter(shortTitle, category)

        expect(result).toEqual(
            expect.stringContaining(`import { NextApiResponse } from 'next'`)
        )

        expect(result).toEqual(
            expect.stringContaining(
                `const dataFilePath = "data/${category}/${shortTitle}/index.json"`
            )
        )
        expect(result).toEqual(
            expect.stringContaining(
                `export async function GET(req: Request, res: NextApiResponse) {`
            )
        )

        expect(result).toEqual(
            expect.stringContaining(`const questionCount = 10`)
        )

        expect(result).toEqual(
            expect.stringContaining(
                `return getFileData(req, res, dataFilePath, questionCount)`
            )
        )
    })
})
