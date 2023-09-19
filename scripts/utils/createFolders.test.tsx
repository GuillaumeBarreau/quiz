import fs from 'fs'
import createFolders from './createFolders.mjs'

describe('createFolders FC', () => {
    const testFolderPath = './test-folder'

    afterAll(() => {
        if (fs.existsSync(testFolderPath)) {
            fs.rmdirSync(testFolderPath)
        }
    })

    it('should create a folder if it does not exist', () => {
        createFolders(testFolderPath)
        expect(fs.existsSync(testFolderPath)).toBe(true)
    })

    it('should not create a folder if it already exists', () => {
        createFolders(testFolderPath)
        createFolders(testFolderPath)
        expect(fs.existsSync(testFolderPath)).toBe(true)
    })
})
