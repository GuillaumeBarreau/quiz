import { render } from '@testing-library/react'
import NavigationBarQuiz from './NavigationBarQuiz.component'
import { INavigationBarQuiz } from './NavigationBarQuiz'

const defaultProps: INavigationBarQuiz = {
    count: 10,
}

const setup = (props: INavigationBarQuiz) => {
    return render(<NavigationBarQuiz {...props}></NavigationBarQuiz>)
}

describe('INavigationBarQuiz component', () => {
    it('should renders without crashing', () => {
        const { container } = setup({ ...defaultProps })
        expect(container).toBeInTheDocument()
    })
})
