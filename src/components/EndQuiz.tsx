interface IPropsEndQuiz {
    numCorrect: number
    questionsNumber: number
}

const EndQuiz: React.FC<IPropsEndQuiz> = ({ numCorrect, questionsNumber }) => {
    const percentCorrect = (100 * numCorrect) / questionsNumber
    let header

    if (percentCorrect >= 60) {
        header = (
            <h1>
                Well done! You got <span>{percentCorrect}%!</span>
            </h1>
        )
    } else {
        header = (
            <h1>
                You got <span>{percentCorrect}%.</span> Better luck next time!
            </h1>
        )
    }

    return (
        <div
            style={{
                height: '100vh',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
            }}
        >
            {header}
        </div>
    )
}

export default EndQuiz
