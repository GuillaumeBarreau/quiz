import { render } from '@testing-library/react'
import Banner from './Banner.component'

const setup = () => {
    return render(<Banner></Banner>)
}
jest.mock('next-auth/react', () => ({
    signIn: () => jest.fn(),
}))

jest.mock('next-auth/react', () => () => (<div>Mocked NextAuth</div>) as never)

describe('Button component', () => {
    it('should renders without crashing', () => {
        const { container } = setup()
        expect(container).toBeInTheDocument()
    })
})
