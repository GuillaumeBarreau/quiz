import fs from 'fs'
import path from 'path'
import formatMDtoJSON from './formatMDtoJSON.mjs'
import createFolders from './createFolders.mjs'

const createJsonFiles = (mdFilePath, name, category) => {
    const dataRootFolder = `../data`
    const categoriesFolder = path.join(dataRootFolder, category)
    const categoryNameFolder = path.join(categoriesFolder, name)

    createFolders(dataRootFolder)

    const questionsString = fs.readFileSync(mdFilePath, {
        encoding: 'utf8',
    })

    const questions = formatMDtoJSON(questionsString)

    createFolders(categoriesFolder)
    createFolders(categoryNameFolder)

    fs.writeFileSync(
        `${categoryNameFolder}/index.json`,
        JSON.stringify(questions, null, 2)
    )
}

export default createJsonFiles
