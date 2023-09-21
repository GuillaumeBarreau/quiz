import { IVerticalBar } from './VerticalBar'

const VerticalBar: React.FC<IVerticalBar> = (props) => {
    const { progress } = props

    return (
        <div className="w-full bg-gray-200 dark:bg-gray-700">
            <div
                data-testid="VerticalBar_progress"
                className="transition-all duration-300 bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none h-3"
                style={{
                    width: `${progress}%`,
                }}
            />
        </div>
    )
}

export default VerticalBar
