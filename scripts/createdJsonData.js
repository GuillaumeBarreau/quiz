import fs from 'fs'
import { utils } from './__utils__'
const markdownFilePathPSD_I = './data/PSD_I.md'
const markdownFilePathCLF_C01 = './data/CLF_C01.md'
const markdownFilePathCAZ_900 = './data/AZ-900.md'
const markdownFilePathPSPO_01 = './data/PSPO_01.md'
const markdownFilePathGCP_ACE = './data/GCP_ACE.md'

const generateFiles = (markdownFilePath, name) => {
    const questionsString = fs.readFileSync(markdownFilePath, {
        encoding: 'utf8',
    })

    const questions = utils.formatMDtoJSON(questionsString)

    fs.writeFileSync(
        `../src/data/${name}/index.json`,
        JSON.stringify(questions, null, 2)
    )
}

generateFiles(markdownFilePathPSD_I, 'PSD_I')
generateFiles(markdownFilePathCLF_C01, 'CLF_C01')
generateFiles(markdownFilePathCAZ_900, 'CAZ_900')
generateFiles(markdownFilePathPSPO_01, 'PSPO_01')
generateFiles(markdownFilePathGCP_ACE, 'GCP_ ACE')
