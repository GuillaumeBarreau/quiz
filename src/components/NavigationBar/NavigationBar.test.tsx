import { render } from '@testing-library/react'
import NavigationBar from './NavigationBar.component'
import { INavigationBar } from './NavigationBar.d'

const defaultProps: INavigationBar = {
    onClickToggleOpenedNavigationBar: jest.fn(),
    NavigationBarIsOpened: false,
}

const setup = ({
    onClickToggleOpenedNavigationBar,
    NavigationBarIsOpened,
}: INavigationBar) => {
    return render(
        <NavigationBar
            onClickToggleOpenedNavigationBar={onClickToggleOpenedNavigationBar}
            NavigationBarIsOpened={NavigationBarIsOpened}
        ></NavigationBar>
    )
}

describe('NavigationBar component', () => {
    it('should renders without crashing', () => {
        const { container } = setup({ ...defaultProps })
        expect(container).toBeInTheDocument()
    })
})
