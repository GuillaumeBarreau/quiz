import { ICardFormation } from './CardFormation.d'
import styles from './CardFormation.module.css'

const CardFormation = ({
    description,
    longTitle,
    shortTitle,
    url,
}: ICardFormation) => {
    return (
        <a
            href={`/practice-mode/quiz/${url}`}
            className={styles.cardFormation_wrapper}
        >
            <svg
                className="w-10 h-10 mb-2 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                    clipRule="evenodd"
                ></path>
                <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path>
            </svg>
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {longTitle}
            </h2>
            <div>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {shortTitle}
                </p>
                <p>{description}</p>
            </div>
        </a>
    )
}

export default CardFormation
