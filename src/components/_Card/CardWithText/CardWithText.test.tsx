import { render } from '@testing-library/react'
import CardWithText from './CardWithText.component'
import { ICardWithText } from './CardWithText.d'

const defaultProps: ICardWithText = {
    title: 'title content',
    image: 'image content',
    url: 'url-content',
}

const setup = (props: ICardWithText) => {
    return render(<CardWithText {...props} />)
}

describe('CardWithText component', () => {
    it('should renders without crashing', () => {
        const { container } = setup(defaultProps)
        expect(container).toBeInTheDocument()
    })

    it('should renders a CardFormation correctly with url value', () => {
        const { getByTestId } = setup({
            ...defaultProps,
        })
        const buttonElement = getByTestId('CardWithText_component')
        expect(buttonElement.getAttribute('href')).toBe(
            `/practice-mode/quiz/${defaultProps.url}`
        )
    })

    it('should does not render when url prop is undefined', () => {
        const { container } = setup({
            ...defaultProps,
            url: undefined as never,
        })
        expect(container).toBeEmptyDOMElement()
    })

    it('should does not render when url prop is null', () => {
        const { container } = setup({
            ...defaultProps,
            url: null as never,
        })
        expect(container).toBeEmptyDOMElement()
    })

    it('should does not render when url prop is empty', () => {
        const { container } = setup({
            ...defaultProps,
            url: '' as never,
        })
        expect(container).toBeEmptyDOMElement()
    })
})
