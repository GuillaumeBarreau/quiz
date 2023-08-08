import { IHeader } from './Header.d'

const Header: React.FC<IHeader> = (props) => {
    const { course, maxQuestions, currentQuestion } = props

    return (
        <div className="w-full flex justify-between items-center p-4">
            <p className="mr-4">{course}</p>
            <progress
                className="w-2/3 h-4 bg-gray-600 rounded-md mt-4"
                max={maxQuestions}
                value={currentQuestion}
            />
            <p className="ml-4">
                {currentQuestion} / {maxQuestions}
            </p>
        </div>
    )
}

export default Header
