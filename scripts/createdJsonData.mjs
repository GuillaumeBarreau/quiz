import fs from 'fs'
import formatMDtoJSON from './utils/formatMDtoJSON.mjs'
import filesConfig from './data.config.mjs'
import routeFileTemplate from './routeFile.template.mjs'

const generateFilesData = (mdFilePath, name) => {
    const questionsString = fs.readFileSync(mdFilePath, {
        encoding: 'utf8',
    })

    const questions = formatMDtoJSON(questionsString)

    const dir = `../data/${name}`

    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir)
    }

    fs.writeFileSync(`${dir}/index.json`, JSON.stringify(questions, null, 2))
}

const generateConfigData = () => {
    const dir = `../src/training.config.json`

    const configApp = {
        count: 0,
        categories: [],
    }

    filesConfig.forEach((file) => {
        configApp.count = configApp.count + 1

        if (!configApp[file.category]) {
            configApp[file.category] = []
        }

        if (!configApp.categories.includes(file.category)) {
            configApp.categories.push(file.category)
        }

        configApp[file.category].push({
            shortTitle: file?.shortTitle,
            url: file?.url,
            description: file?.description,
            longTitle: file?.longTitle,
        })
    })

    fs.writeFileSync(`${dir}`, JSON.stringify(configApp, null, 2))
}

const generateAPIRoutes = (file) => {
    const apiFolder = `../src/app/api/practice-mode/quiz`
    const apiRouteFolder = `${apiFolder}/${file.url}`

    // Create api folder if it doesn't exist
    if (!fs.existsSync(apiFolder)) {
        fs.mkdirSync(apiFolder)
    }

    // Create api route folder if it doesn't exist
    if (!fs.existsSync(apiRouteFolder)) {
        fs.mkdirSync(apiRouteFolder)
    }

    // Create route file
    const template = routeFileTemplate(file.shortTitle)
    fs.writeFileSync(`${apiRouteFolder}/route.ts`, template, 'utf8')
}

filesConfig.map((file) => {
    generateFilesData(file.path, file.shortTitle)
    generateConfigData()
    generateAPIRoutes(file)
})
