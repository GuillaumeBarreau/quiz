import { IStatus } from './Status.d'
import styles from './Status.module.css'

const Status: React.FC<IStatus> = (props) => {
    return (
        <div
            className={`${styles.status_container} ${
                props.correct ? 'bg-blue-200' : 'bg-red-200'
            }`}
        >
            <div className={styles.status_content}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 ${
                        props.correct ? 'text-blue-400' : 'text-red-600'
                    } mr-2`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                    />
                </svg>
                <p
                    className={`text-lg ${
                        props.correct ? 'text-blue-800' : 'text-red-800'
                    }`}
                >
                    {props.correct ? 'Correct!' : 'Wrong!'}
                </p>
            </div>
        </div>
    )
}

export default Status
