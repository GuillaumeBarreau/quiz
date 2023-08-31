import { render } from '@testing-library/react'
import VerticalBar from './VerticalBar.component'
import { IVerticalBar } from './VerticalBar'

const defaultProps: IVerticalBar = {
    progress: 42,
}

const setup = (props: IVerticalBar) => {
    return render(<VerticalBar {...props} />)
}

describe('VerticalBar component', () => {
    it('should renders without crashing', () => {
        const { container } = setup({ ...defaultProps })
        expect(container).toBeInTheDocument()
    })
    it('should renders a CardFormation correctly with url value', () => {
        const { getByTestId } = setup({ ...defaultProps })
        const buttonElement = getByTestId('VerticalBar_progress')
        expect(buttonElement.getAttribute('style')).toBe(
            `width: ${defaultProps.progress}%;`
        )
    })
})
