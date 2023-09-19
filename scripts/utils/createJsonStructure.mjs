import fs from 'fs'

const createJsonStructure = (configDir) => {
    try {
        const folders = fs.readdirSync(configDir)

        const config = folders.reduce((accumulator, folder) => {
            const foldersCategories = fs.readdirSync(`${configDir}/${folder}`)

            const categoryConfig = foldersCategories.map((category) => {
                const fileBuffer = fs.readFileSync(
                    `${configDir}/${folder}/${category}/${category}.json`,
                    'utf-8'
                )

                const fileJson = JSON.parse(fileBuffer)

                return {
                    category: folder,
                    description: fileJson.description,
                    longTitle: fileJson.longTitle,
                    shortTitle: fileJson.shortTitle,
                    url: fileJson.url,
                    get path() {
                        return `./data/${folder}/${this.shortTitle}/${this.shortTitle}.md`
                    },
                }
            })

            return accumulator.concat(categoryConfig)
        }, [])

        return config
    } catch (error) {
        return []
    }
}

export default createJsonStructure
