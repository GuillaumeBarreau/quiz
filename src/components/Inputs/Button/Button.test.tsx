import { PropsWithChildren } from 'react'
import { render, fireEvent } from '@testing-library/react'
import Button from './Button.component'
import { IButton } from './Button.d'

const defaultProps: IButton = {
    onClick: jest.fn(),
    disabled: false,
}

const setup = (props: PropsWithChildren<IButton>) => {
    return render(<Button {...props}>{props.children}</Button>)
}

describe('Button component', () => {
    it('should renders without crashing', () => {
        const { container } = setup(defaultProps)
        expect(container).toBeInTheDocument()
    })

    it('should renders a button correctly with children value', () => {
        const { getByText } = setup({
            ...defaultProps,
            children: 'children content',
        })
        const buttonElement = getByText('children content')
        expect(buttonElement).toBeInTheDocument()
    })

    it('should calls onClick when the button is clicked', () => {
        const { getByTestId } = setup(defaultProps)
        const buttonElement = getByTestId('Button_component')
        fireEvent.click(buttonElement)
        expect(defaultProps.onClick).toHaveBeenCalledTimes(1)
    })

    it('should disables the button when disabled prop is true', () => {
        const { getByTestId } = setup({ ...defaultProps, disabled: true })
        const buttonElement = getByTestId('Button_component')
        expect(buttonElement).toBeDisabled()
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
