import { render } from '@testing-library/react'
import CategoryCard from './CategoryCard.component'
import { ICategoryCard } from './CategoryCard.d'

const defaultProps: ICategoryCard = {
    category: 'category content',
}

const setup = (props: ICategoryCard) => {
    return render(<CategoryCard {...props} />)
}

describe('CardSections component', () => {
    it('should renders without crashing', () => {
        const { container } = setup(defaultProps)
        expect(container).toBeInTheDocument()
    })

    it('should renders a CategoryCard correctly with category value', () => {
        const { getByTestId } = setup({
            ...defaultProps,
        })
        const buttonElement = getByTestId('CategoryCard_component')
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
