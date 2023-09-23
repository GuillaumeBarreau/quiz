import { render, fireEvent } from '@testing-library/react'
import AuthButton from './AuthButton.component'
import { IAuthButton } from './AuthButton.d'
import { PropsWithChildren } from '@/types'

const defaultProps: IAuthButton = {
    onClick: jest.fn(),
    children: 'children content',
}

const setup = (props: IAuthButton) => {
    return render(<AuthButton {...props}>{props.children}</AuthButton>)
}

describe('AuthButton component', () => {
    it('should renders without crashing', () => {
        const { container } = setup(defaultProps)
        expect(container).toBeInTheDocument()
    })

    it('should renders a component AuthButton correctly with children value', () => {
        const { getByText } = setup({
            ...defaultProps,
            children: 'children content',
        })
        const buttonElement = getByText('children content')
        expect(buttonElement).toBeInTheDocument()
    })

    it('should calls onClick when the component AuthButton is clicked', () => {
        const { getByTestId } = setup(defaultProps)
        const buttonElement = getByTestId('Button_component')
        fireEvent.click(buttonElement)
        expect(defaultProps.onClick).toHaveBeenCalledTimes(1)
    })

    it('should does not render when onClick prop is undefined', () => {
        const { container } = setup({ ...defaultProps, onClick: undefined })
        expect(container).toBeEmptyDOMElement()
    })

    it('should does not render when onClick prop is null', () => {
        const { container } = setup({ ...defaultProps, onClick: null as never })
        expect(container).toBeEmptyDOMElement()
    })

    it('should does not render when onClick prop is empty', () => {
        const { container } = setup({ ...defaultProps, onClick: '' as never })
        expect(container).toBeEmptyDOMElement()
    })
})
