import { render } from '@testing-library/react'
import CardCategory from './CardCategory.component'
import { ICardCategory } from './CardCategory.d'

const defaultProps: ICardCategory = {
    category: 'category content',
}

const setup = (props: ICardCategory) => {
    return render(<CardCategory {...props} />)
}

describe('CardSection component', () => {
    it('should renders without crashing', () => {
        const { container } = setup(defaultProps)
        expect(container).toBeInTheDocument()
    })

    it('should renders a CardCategory correctly with category value', () => {
        const { getByTestId } = setup({
            ...defaultProps,
        })
        const buttonElement = getByTestId('CardCategory_component')
        expect(buttonElement.getAttribute('href')).toBe(
            `#${defaultProps.category}`
        )
    })

    it('should does not render when category prop is undefined', () => {
        const { container } = setup({
            ...defaultProps,
            category: undefined as never,
        })
        expect(container).toBeEmptyDOMElement()
    })

    it('should does not render when category prop is null', () => {
        const { container } = setup({
            ...defaultProps,
            category: null as never,
        })
        expect(container).toBeEmptyDOMElement()
    })

    it('should does not render when category prop is empty', () => {
        const { container } = setup({
            ...defaultProps,
            category: '' as never,
        })
        expect(container).toBeEmptyDOMElement()
    })
})
