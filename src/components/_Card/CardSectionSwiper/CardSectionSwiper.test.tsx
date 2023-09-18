import { render } from '@testing-library/react'
import CardSectionSwiper from './CardSectionSwiper.component'
import { ICardSectionSwiper } from './CardSectionSwiper.d'

const defaultProps: ICardSectionSwiper = {
    title: 'title content',
    image: 'image content',
    url: 'url-content',
}

const setup = (props: ICardSectionSwiper) => {
    return render(<CardSectionSwiper {...props} />)
}

describe('CardSectionSwiper component', () => {
    it('should renders without crashing', () => {
        const { container } = setup(defaultProps)
        expect(container).toBeInTheDocument()
    })

    it('should renders a CardFormation correctly with url value', () => {
        const { getByTestId } = setup({
            ...defaultProps,
        })
        const buttonElement = getByTestId('CardSectionSwiper_component')
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
