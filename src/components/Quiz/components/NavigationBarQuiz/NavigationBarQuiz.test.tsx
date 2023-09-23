import { render } from '@testing-library/react'
import NavigationBar from './NavigationBarQuiz.component'
import { INavigationBarQuiz } from './NavigationBarQuiz'

const defaultProps: INavigationBarQuiz = {
    onClickToggleOpenedNavigationBar: jest.fn(),
    NavigationBarIsOpened: false,
}

const setup = ({}: INavigationBarQuiz) => {
    return render(<NavigationBar></NavigationBar>)
}

describe('INavigationBarQuiz component', () => {
    it('should renders without crashing', () => {
        const { container } = setup({ ...defaultProps })
        expect(container).toBeInTheDocument()
    })
})
