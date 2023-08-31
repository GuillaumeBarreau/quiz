import { render } from '@testing-library/react'
import Loader from './Loader.component'

const setup = () => {
    return render(<Loader />)
}

describe('Loader component', () => {
    it('should renders without crashing', () => {
        const { container } = setup()
        expect(container).toBeInTheDocument()
    })
})
