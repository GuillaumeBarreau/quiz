import { render } from '@testing-library/react'
import AuthLogin from './AuthLogin.component'
import { IAuthLogin } from './AuthLogin.d'

const defaultProps: IAuthLogin = {
    onClick: () => jest.fn(),
}

const setup = (props: IAuthLogin) => {
    return render(<AuthLogin {...props}></AuthLogin>)
}

describe('AuthLogin component', () => {
    it('should renders without crashing', () => {
        const { container } = setup(defaultProps)
        expect(container).toBeInTheDocument()
    })
})
