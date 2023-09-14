import fs from 'fs'
import formatMDtoJSON from './utils/formatMDtoJSON.mjs'
import filesConfig from './data.config.mjs'
import routeFileTemplate from './routeFile.template.mjs'

const generateFilesData = (mdFilePath, name, category) => {

    if (!fs.existsSync('../data')) {
        fs.mkdirSync('../data')
    }

    const questionsString = fs.readFileSync(mdFilePath, {
        encoding: 'utf8',
    })

    const questions = formatMDtoJSON(questionsString)

    const dirCategory = `../data/${category}`
    const dir = `${dirCategory}/${name}`

    if (!fs.existsSync(dirCategory)) {
        fs.mkdirSync(dirCategory)
    }

    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir)
    }

    fs.writeFileSync(`${dir}/index.json`, JSON.stringify(questions, null, 2))
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
    const apiFolder = `../src/app/api/practice-mode/quiz`
    const apiRouteFolderCategory = `${apiFolder}/${file.category}`
    const apiRouteFolder = `${apiRouteFolderCategory}/${file.url}`

    // Create api folder if it doesn't exist
    if (!fs.existsSync(apiFolder)) {
        fs.mkdirSync(apiFolder)
    }

    // Create api route folder for Category if it doesn't exist
    if (!fs.existsSync(apiRouteFolderCategory)) {
        fs.mkdirSync(apiRouteFolderCategory)
    }

    // Create api route folder for file if it doesn't exist
    if (!fs.existsSync(apiRouteFolder)) {
        fs.mkdirSync(apiRouteFolder)
    }

    // Create route file
    const template = routeFileTemplate(file.shortTitle, file.category)
    fs.writeFileSync(`${apiRouteFolder}/route.ts`, template, 'utf8')
}

filesConfig.map((file) => {
    generateFilesData(file.path, file.shortTitle, file.category)
    generateConfigData()
    generateAPIRoutes(file)
})
