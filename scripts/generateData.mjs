import {
    createJsonFiles,
    createJsonConfig,
    createApiRoutes,
    createJsonStructure,
} from './utils/index.mjs'

createJsonStructure('./data').map((file) => {
    createJsonFiles(file.path, file.shortTitle, file.category)
    createJsonConfig()
    createApiRoutes(file)
})
