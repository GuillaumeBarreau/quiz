import { Link } from 'react-router-dom'
import Image from 'next/image'

function SubjectCard(props) {
    return (
        <Link
            to={props.navigate}
            className="flex items-center cursor-pointer border rounded-md p-4 hover:bg-gray-100 transition duration-300"
        >
            <div className="flex-shrink-0">
                <h1 className="text-lg font-semibold">{props.subject}</h1>
                <Image
                    src={props.imgSrc}
                    alt={props.imgAlt}
                    className="mt-2 w-36 h-36"
                />
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-6 h-6 ml-4 text-red-500"
            >
                <path
                    fillRule="evenodd"
                    d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                    clipRule="evenodd"
                />
            </svg>
        </Link>
    )
}

export default SubjectCard
