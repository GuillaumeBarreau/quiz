import { render } from '@testing-library/react'
import CardSection from './CardSection.component'
import { ICardSection } from './CardSection.d'

const defaultProps: ICardSection = {
    description: 'description content',
    longTitle: 'longTitle content',
    shortTitle: 'shortTitle content',
    url: 'url-content',
}

const setup = (props: ICardSection) => {
    return render(<CardSection {...props} />)
}

describe('CardSection component', () => {
    it('should renders without crashing', () => {
        const { container } = setup(defaultProps)
        expect(container).toBeInTheDocument()
    })

    it('should renders a CardFormation correctly with description value', () => {
        const { getByText } = setup({
            ...defaultProps,
        })
        const buttonElement = getByText(defaultProps.description)
        expect(buttonElement).toBeInTheDocument()
    })

    it('should does not render a description value if description is undefined', () => {
        const { container } = setup({
            ...defaultProps,
            description: undefined as never,
        })
        expect(container).not.toContain(defaultProps.description)
    })

    it('should does not render a description value if description is null', () => {
        const { container } = setup({
            ...defaultProps,
            description: null as never,
        })
        expect(container).not.toContain(defaultProps.description)
    })

    it('should does not render a description value if description is empty', () => {
        const { container } = setup({
            ...defaultProps,
            description: '' as never,
        })
        expect(container).not.toContain(defaultProps.description)
    })

    it('should renders a CardFormation correctly with longTitle value', () => {
        const { getByText } = setup({
            ...defaultProps,
        })
        const buttonElement = getByText(defaultProps.longTitle)
        expect(buttonElement).toBeInTheDocument()
    })
    it('should does not render a longTitle value if longTitle is undefined', () => {
        const { container } = setup({
            ...defaultProps,
            longTitle: undefined as never,
        })
        expect(container).not.toContain(defaultProps.longTitle)
    })

    it('should does not render a longTitle value if longTitle is null', () => {
        const { container } = setup({
            ...defaultProps,
            longTitle: null as never,
        })
        expect(container).not.toContain(defaultProps.longTitle)
    })

    it('should does not render a longTitle value if longTitle is empty', () => {
        const { container } = setup({
            ...defaultProps,
            longTitle: '' as never,
        })
        expect(container).not.toContain(defaultProps.longTitle)
    })

    it('should renders a CardFormation correctly with shortTitle value', () => {
        const { getByText } = setup({
            ...defaultProps,
        })
        const buttonElement = getByText(defaultProps.shortTitle)
        expect(buttonElement).toBeInTheDocument()
    })

    it('should does not render a shortTitle value if shortTitle is undefined', () => {
        const { container } = setup({
            ...defaultProps,
            shortTitle: undefined as never,
        })
        expect(container).not.toContain(defaultProps.shortTitle)
    })

    it('should does not render a shortTitle value if shortTitle is null', () => {
        const { container } = setup({
            ...defaultProps,
            shortTitle: null as never,
        })
        expect(container).not.toContain(defaultProps.shortTitle)
    })

    it('should does not render a shortTitle value if shortTitle is empty', () => {
        const { container } = setup({
            ...defaultProps,
            shortTitle: '' as never,
        })
        expect(container).not.toContain(defaultProps.shortTitle)
    })

    it('should renders a CardFormation correctly with url value', () => {
        const { getByTestId } = setup({
            ...defaultProps,
        })
        const buttonElement = getByTestId('CardFormation_component')
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
