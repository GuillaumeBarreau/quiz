import { IVerticalBar } from './VerticalBar.d'
import styles from './VerticalBar.module.css'

const VerticalBar: React.FC<IVerticalBar> = (props) => {
    const { progress } = props

    return (
        <div className="w-full bg-gray-200 dark:bg-gray-700 mb-4">
            <div
                className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none h-2"
                style={{
                    width: `${progress}%`,
                }}
            />
        </div>
    )
}

export default VerticalBar
