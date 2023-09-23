import { INavigationBarQuiz } from './NavigationBarQuiz'

const NavigationBarQuiz: React.FC<INavigationBarQuiz> = ({ count }) => {
    return (
        <div
            id="docs-sidebar"
            className="w-[color:var(--navBar-width--hidden)] bg-white border-r border-gray-200 pt-7 pb-10 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:right-auto lg:bottom-0 dark:scrollbar-y dark:bg-[color:var(--background-primary-color)] dark:border-gray-700"
        >
            <nav className="hs-accordion-group p-6 w-full flex flex-col flex-wrap">
                <ul className="space-y-1.5">
                    {Array(count)
                        .fill('')
                        .map((_, index) => {
                            return <li key={index}>{++index}</li>
                        })}
                </ul>
            </nav>
        </div>
    )
}

export default NavigationBarQuiz
