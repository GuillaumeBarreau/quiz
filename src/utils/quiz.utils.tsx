export const shuffleArray = (array: any[]) => {
    let currentIndex = array.length

    while (currentIndex !== 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--

        ;[array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ]
    }

    if (
        array.includes('All of the above.') ||
        array.includes('None of the above.')
    ) {
        const value = array.includes('All of the above.')
            ? 'All of the above.'
            : 'None of the above.'
        let index = array.indexOf(value)
        if (index !== -1) {
            array.splice(index, 1)
            array.push(value)
        }
    }

    return array
}

export const shuffleJson = (json: any) => {
    const shuffledJson = [...json]
    for (let i = shuffledJson.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[shuffledJson[i], shuffledJson[j]] = [shuffledJson[j], shuffledJson[i]]
    }
    return shuffledJson
}

export const generateQuiz = (jsonArray: any, questionsNumber: any) => {
    const shuffleQuestions = shuffleJson(jsonArray)
    const sliceQuestions = shuffleQuestions.slice(0, questionsNumber)
    const shuffleAnswers = sliceQuestions.map((question) => {
        question.answers = shuffleArray(question.answers)
        return question
    })
    return shuffleAnswers
}
