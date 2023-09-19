import fs from 'fs'

const createFolders = (folderPath) => {
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath)
    }
}

export default createFolders
