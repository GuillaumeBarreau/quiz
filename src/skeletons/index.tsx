import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export const SkeletonTest = () => {
    return (
        <div className="flex flex-wrap p-6 justify-center">
            {Array(36)
                .fill('')
                .map((_, index) => (
                    <div key={index} className="m-2">
                        <Skeleton height={176} width={256} />
                    </div>
                ))}
        </div>
    )
}
