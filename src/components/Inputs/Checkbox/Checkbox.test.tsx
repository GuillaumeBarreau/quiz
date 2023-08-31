import { PropsWithChildren } from 'react'
import { render, fireEvent } from '@testing-library/react'
import Checkbox from './Checkbox.component'
import { ICheckbox } from './Checkbox.d'

const defaultProps: ICheckbox = {
    label: 'label',
    checked: false,
    disabled: false,
    onChangeInputChecked: jest.fn(),
}

const setup = (props: PropsWithChildren<ICheckbox>) => {
    return render(<Checkbox {...props}>{props.children}</Checkbox>)
}

describe('Checkbox component', () => {
    it('should renders without crashing', () => {
        const { container } = setup(defaultProps)
        expect(container).toBeInTheDocument()
    })

    it('should renders a Checkbox correctly with label value', () => {
        const { getByTestId } = setup({
            ...defaultProps,
            children: 'children content',
        })
        const buttonElement = getByTestId('Checkbox_label')
        expect(buttonElement).toBeInTheDocument()
    })

    it('should calls onChangeInputChecked when the Checkbox is clicked', () => {
        const { getByTestId } = setup(defaultProps)
        const checkboxElement = getByTestId('Checkbox_input')
        fireEvent.click(checkboxElement)
        expect(defaultProps.onChangeInputChecked).toHaveBeenCalledTimes(1)
    })

    it('should renders a Checkbox with a Checkbox as true', () => {
        const { getByTestId } = setup({
            ...defaultProps,
            checked: true,
        })
        const checkboxElement = getByTestId('Checkbox_input')
        expect(checkboxElement).toBeChecked()
    })

    it('should does not render when onClick prop is undefined', () => {
        const { container } = setup({
            ...defaultProps,
            onChangeInputChecked: undefined as never,
        })
        expect(container).toBeEmptyDOMElement()
    })

    it('should does not render when onClick prop is empty', () => {
        const { container } = setup({
            ...defaultProps,
            onChangeInputChecked: '' as never,
        })
        expect(container).toBeEmptyDOMElement()
    })

    it('should does not render when onClick prop is null', () => {
        const { container } = setup({
            ...defaultProps,
            onChangeInputChecked: null as never,
        })
        expect(container).toBeEmptyDOMElement()
    })

    it('should does not render when label prop is undefined', () => {
        const { container } = setup({
            ...defaultProps,
            label: undefined as never,
        })
        expect(container).toBeEmptyDOMElement()
    })

    it('should does not render when label prop is empty', () => {
        const { container } = setup({
            ...defaultProps,
            label: '' as never,
        })
        expect(container).toBeEmptyDOMElement()
    })

    it('should does not render when label prop is null', () => {
        const { container } = setup({
            ...defaultProps,
            label: null as never,
        })
        expect(container).toBeEmptyDOMElement()
    })
})
