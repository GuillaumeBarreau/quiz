import fs from 'fs'
import formatMDtoJSON from './utils/formatMDtoJSON.mjs'
import filesConfig from './data.config.mjs'
import routeFileTemplate from './routeFile.template.mjs'

const generateFilesData = (markdownFilePath, name) => {
    const questionsString = fs.readFileSync(markdownFilePath, {
        encoding: 'utf8',
    })

    const questions = formatMDtoJSON(questionsString)

    const dir = `../data/${name}`

    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir)
    }

    fs.writeFileSync(`${dir}/index.json`, JSON.stringify(questions, null, 2))
}

const generateConfigData = (file) => {
    const dir = `../src/training.config.json`

    const config = filesConfig.map((file) => {
        return {
            shortTitle: file.shortTitle,
            url: file.url,
            description: file.description,
            longTitle: file.longTitle,
        }
    })

    if (!fs.existsSync(dir)) {
        fs.writeFileSync(`${dir}`, JSON.stringify(config, null, 2))
    }
}

const generateAPIRoutes = (file) => {
    const apiFolder = `../src/app/api/practice-mode/quiz`
    const apiRouteFolder = `${apiFolder}/${file.url}`

    if (!fs.existsSync(apiFolder)) {
        fs.mkdirSync(apiFolder)
    }

    if (!fs.existsSync(apiRouteFolder)) {
        fs.mkdirSync(apiRouteFolder)
    }

    const template = routeFileTemplate(file.shortTitle)

    fs.writeFileSync(`${apiRouteFolder}/route.ts`, template, 'utf8')
}

filesConfig.map((file) => {
    generateFilesData(file.path, file.shortTitle)
    generateConfigData(file)
    generateAPIRoutes(file)
})
