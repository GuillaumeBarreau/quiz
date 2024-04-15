import { render } from '@testing-library/react'
import Component from './ProductCardDetails.component'
import { TProductCardDetails } from '../ProductCard.types'

const props: TProductCardDetails = {
    data: {
        shortTitle: 'ProductCardDetails shortTitle',
        longTitle: 'ProductCardDetails longTitle',
        url: 'ProductCardDetails url',
        description: 'ProductCardDetails description',
    },
    stars: 1,
    preview: 'ProductCardDetails preview',
    reviewCount: 14,
    averageScore: 97,
}

const setup = ({ ...overrideProps }) => {
    return render(<Component {...props} {...overrideProps}></Component>)
}

describe('Test ProductCard component', () => {
    it('should render the component', () => {
        const { container } = setup({ ...props })
        expect(container).toBeInTheDocument()
    })

    it('should contain a [data.description] Props', () => {
        const { container } = setup({ ...props })
        expect(container).toHaveTextContent(`${props.data.description}`)
    })

    it('should contain a [data.longTitle] Props', () => {
        const { container } = setup({ ...props })
        expect(container).toHaveTextContent(`${props.data.longTitle}`)
    })

    it('should contain a [data.url] Props', () => {
        const { container } = setup({ ...props })
        expect(container).toHaveTextContent(`${props.data.url}`)
    })

    it('should contain a [data.shortTitle] Props', () => {
        const { container } = setup({ ...props })
        expect(container).toHaveTextContent(`${props.data.shortTitle}`)
    })

    it('should contain a [preview] Props', () => {
        const { container } = setup({ ...props })
        expect(container).toHaveTextContent(`${props.preview}`)
    })

    it('should contain a [reviewCount] Props', () => {
        const { container } = setup({ ...props })
        expect(container).toHaveTextContent(`${props.reviewCount}`)
    })
})
