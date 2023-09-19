import {
    createJsonFiles,
    createJsonConfig,
    createApiRoutes,
    createJsonStructure,
} from './utils/index.mjs'

createJsonStructure.map((file) => {
    createJsonFiles(file.path, file.shortTitle, file.category)
    createJsonConfig()
    createApiRoutes(file)
})
