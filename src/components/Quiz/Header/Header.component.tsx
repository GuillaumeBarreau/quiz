import { IHeader } from './Header.d'

const Header: React.FC<IHeader> = (props) => {
    const { course, maxQuestions, currentQuestion } = props

    return (
        <div className="h-16 mb-4 p-4 w-full px-3 border-b-2 border-slate-700 text-white flex justify-between items-center">
            <div>
                <p className="font-bold text-4xl leading-7">
                    Practice Test Exam
                </p>
            </div>
            <div>
                <p className="mr-4">{course}</p>
            </div>
            {/* <progress
                className="w-2/3 h-4 bg-gray-600 rounded-md mt-4"
                max={maxQuestions}
                value={currentQuestion}
            />
            <p className="ml-4">
                {currentQuestion} / {maxQuestions}
            </p> */}
        </div>
    )
}

export default Header
