const formatMDtoJSON = (readme) => {
    const lines = readme.split('\n')
    const questions = []

    let position = 0
    let question = null
    let answers = []
    let correctAnswer = []

    lines.forEach((line) => {
        if (line.startsWith('### ')) {
            if (question !== null) {
                questions.push({ position, question, answers, correctAnswer })
            }

            position = position += 1
            question = line.replace('### ', '').trim()
            answers = []
            correctAnswer = []
        } else if (line.startsWith('- [x]')) {
            answers.push(line.replace('- [x]', '').trim())
            correctAnswer.push(line.replace('- [x]', '').trim())
        } else if (line.startsWith('- [ ]')) {
            answers.push(line.replace('- [ ]', '').trim())
        }
    })

    questions.push({ position, question, answers, correctAnswer })

    return questions
}

export default formatMDtoJSON
