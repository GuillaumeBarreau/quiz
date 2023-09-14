import fs from 'fs'

const dataObjectTemplate = () => {
    const configDir = './data'
    try {
        const folders = fs.readdirSync(configDir)
        const config = []

        folders.forEach((folder) => {
            const foldersCategories = fs.readdirSync(`${configDir}/${folder}`)

            foldersCategories.forEach((category) => {
                const fileBuffer = fs.readFileSync(
                    `${configDir}/${folder}/${category}/${category}.json`,
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
                        return `./data/${folder}/${this.shortTitle}/${this.shortTitle}.md`
                    },
                })
            })
        })

        return config
    } catch (error) {
        return []
    }
}

export default dataObjectTemplate()
