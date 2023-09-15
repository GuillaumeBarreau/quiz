import fs from 'fs'
import path from 'path'
import formatMDtoJSON from './utils/formatMDtoJSON.mjs'
import filesConfig from './data.config.mjs'
import routeFileTemplate from './routeFile.template.mjs'

const generateFilesData = (mdFilePath, name, category) => {
    const dataRootFolder = `../data`
    const categoriesFolder = path.join(dataRootFolder, category)
    const categoryNameFolder = path.join(categoriesFolder, name)

    createFolderIfNotExists(dataRootFolder)

    const questionsString = fs.readFileSync(mdFilePath, {
        encoding: 'utf8',
    })

    const questions = formatMDtoJSON(questionsString)

    createFolderIfNotExists(categoriesFolder)
    createFolderIfNotExists(categoryNameFolder)

    fs.writeFileSync(
        `${categoryNameFolder}/index.json`,
        JSON.stringify(questions, null, 2)
    )
}

const generateConfigData = () => {
    const dir = `../src/training.config.json`

    const configApp = {
        count: 0,
        categoriesList: [],
        dataConfig: {},
    }

    filesConfig.forEach((file) => {
        configApp.count = configApp.count + 1

        if (!configApp.dataConfig[file.category]) {
            configApp.dataConfig[file.category] = []
        }

        if (!configApp.categoriesList.includes(file.category)) {
            configApp.categoriesList.push(file.category)
        }

        configApp.dataConfig[file.category].push({
            shortTitle: file?.shortTitle,
            url: `${file?.category}/${file?.url}`,
            description: file?.description,
            longTitle: file?.longTitle,
        })
    })

    fs.writeFileSync(`${dir}`, JSON.stringify(configApp, null, 2))
}

const generateAPIRoutes = (file) => {
    const apiRootFolder = '../src/app/api'
    const apPracticeModeFolder = path.join(apiRootFolder, '/practice-mode')
    const apiQuizFolder = path.join(apPracticeModeFolder, '/quiz')
    const apiRouteFolderCategory = path.join(apiQuizFolder, file.category)
    const apiRouteFolder = path.join(apiRouteFolderCategory, file.url)

    createFolderIfNotExists(apiRootFolder)
    createFolderIfNotExists(apPracticeModeFolder)
    createFolderIfNotExists(apiQuizFolder)
    createFolderIfNotExists(apiRouteFolderCategory)
    createFolderIfNotExists(apiRouteFolder)

    const template = routeFileTemplate(file.shortTitle, file.category)
    fs.writeFileSync(`${apiRouteFolder}/route.ts`, template, 'utf8')
}

const createFolderIfNotExists = (folderPath) => {
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath)
    }
}

filesConfig.map((file) => {
    generateFilesData(file.path, file.shortTitle, file.category)
    generateConfigData()
    generateAPIRoutes(file)
})
