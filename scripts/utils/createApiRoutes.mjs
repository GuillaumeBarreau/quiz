import fs from 'fs'
import path from 'path'
import createFileRouter from './createFileRouter.mjs'
import createFolders from './createFolders.mjs'

const createApiRoutes = (file) => {
    const apiRootFolder = '../src/app/api'
    const apPracticeModeFolder = path.join(apiRootFolder, '/practice-mode')
    const apiQuizFolder = path.join(apPracticeModeFolder, '/quiz')
    const apiRouteFolderCategory = path.join(apiQuizFolder, file.category)
    const apiRouteFolder = path.join(apiRouteFolderCategory, file.url)

    createFolders(apiRootFolder)
    createFolders(apPracticeModeFolder)
    createFolders(apiQuizFolder)
    createFolders(apiRouteFolderCategory)
    createFolders(apiRouteFolder)

    const template = createFileRouter(file.shortTitle, file.category)
    fs.writeFileSync(`${apiRouteFolder}/route.ts`, template, 'utf8')
}

export default createApiRoutes
