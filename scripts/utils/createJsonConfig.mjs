import fs from 'fs'
import filesConfig from './createJsonStructure.mjs'

const createJsonConfig = () => {
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

export default createJsonConfig
