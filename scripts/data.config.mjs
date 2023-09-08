import fs from 'fs'

const dataObjectTemplate = () => {
    const configDir = 'config'
    try {
        const folders = fs.readdirSync(configDir)
        const config = []
        folders.forEach((folder) => {
            const files = fs.readdirSync(`${configDir}/${folder}`)
            return files.forEach((file) => {
                const fileBuffer = fs.readFileSync(
                    `./config/${folder}/${file}`,
                    'utf-8'
                )
                const fileJson = JSON.parse(fileBuffer)
                config.push({
                    category: folder,
                    description: fileJson.description,
                    longTitle: fileJson.longTitle,
                    shortTitle: fileJson.shortTitle,
                    url: fileJson.url,
                    get path() {
                        return `./data/${folder}/${this.shortTitle}.md`
                    },
                })
            })
        })

        return config
    } catch (error) {
        return []
    }
}

const dataConfig = dataObjectTemplate()

export default dataConfig
