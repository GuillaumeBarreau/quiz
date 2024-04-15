import { render } from '@testing-library/react'
import Component from './ProductCard.component'
import { IProductCard } from './ProductCard.types'

const props: IProductCard = {
    id: 'ProductCard id',
    preview: 'ProductCard preview',
    pictureId: 'ProductCard pictureId',
    data: {
        shortTitle: 'ProductCardDetails shortTitle',
        longTitle: 'ProductCardDetails longTitle',
        url: 'ProductCardDetails url',
        description: 'ProductCardDetails description',
    },
    stars: 1,
    reviewCount: 1,
    averageScore: 1,
}

// jest.mock("./ProductCardImage/ProductCardImage.component", () => () => {
//   const ComponentMock = <div>ProductCardImage</div>;
//   return ComponentMock;
// });

// jest.mock("./ProductCardDetails/ProductCardDetails.component", () => () => {
//   const ComponentMock = <div>ProductCardDetails</div>;
//   return ComponentMock;
// });

// jest.mock("./ProductCardPrice/ProductCardPrice.component", () => () => {
//   const ComponentMock = <div>ProductCardPrice</div>;
//   return ComponentMock;
// });

const setup = ({ ...overrideProps }) => {
    return render(<Component {...props} {...overrideProps}></Component>)
}

describe('Test ProductCard component', () => {
    it('should render the component', () => {
        const { container } = setup({ ...props })
        expect(container).toBeInTheDocument()
    })

    // it("should contain all children component", () => {
    //   const { getByText } = setup({ ...props });
    //   expect(getByText("ProductCardImage")).toBeInTheDocument();
    //   expect(getByText("ProductCardDetails")).toBeInTheDocument();
    //   expect(getByText("ProductCardPrice")).toBeInTheDocument();
    // });
})
