import { PropsWithChildren } from 'react'
import { render } from '@testing-library/react'
import Button from './ButtonGroup.component'
import { IButtonGroup } from './ButtonGroup.d'

const defaultProps: IButtonGroup = {
    orientation: false,
}

const setup = (props: PropsWithChildren<IButtonGroup>) => {
    return render(<Button {...props}>{props.children}</Button>)
}

describe('ButtonGroup component', () => {
    it('should renders without crashing', () => {
        const { container } = setup(defaultProps)
        expect(container).toBeInTheDocument()
    })

    it('should renders a ButtonGroup correctly with children value', () => {
        const { getByText } = setup({
            ...defaultProps,
            children: 'children content',
        })
        const buttonElement = getByText('children content')
        expect(buttonElement).toBeInTheDocument()
    })

    it('should does not render when children prop is undefined', () => {
        const { container } = setup({ ...defaultProps, children: undefined })
        expect(container).toBeEmptyDOMElement()
    })

    it('should does not render when children prop is null', () => {
        const { container } = setup({ ...defaultProps, children: null })
        expect(container).toBeEmptyDOMElement()
    })

    it('should does not render when children prop is empty', () => {
        const { container } = setup({ ...defaultProps, children: '' })
        expect(container).toBeEmptyDOMElement()
    })
})
