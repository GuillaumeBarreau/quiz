import fs from 'fs'

const dataObjectTemplate = () => {
    const configDir = 'config'
    try {
        const files = fs.readdirSync(configDir)

        const config = files.map((file) => {
            const fileBuffer = fs.readFileSync(`./config/${file}`, 'utf-8')
            const fileJson = JSON.parse(fileBuffer)

            return {
                description: fileJson.description,
                longTitle: fileJson.longTitle,
                shortTitle: fileJson.shortTitle,
                url: fileJson.url,
                get path() {
                    return `./data/${this.shortTitle}.md`
                },
            }
        })

        return config
    } catch (error) {
        return []
    }
}

const dataConfig = dataObjectTemplate()

export default dataConfig
