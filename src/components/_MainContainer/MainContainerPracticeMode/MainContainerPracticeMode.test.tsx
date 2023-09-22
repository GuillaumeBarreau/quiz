import { PropsWithChildren } from 'react'
import { render } from '@testing-library/react'
import MainContainerPracticeMode from './MainContainerPracticeMode.component'

const defaultProps = {
    children: 'children content',
}

const setup = (props: PropsWithChildren) => {
    return render(
        <MainContainerPracticeMode {...props}>
            {props.children}
        </MainContainerPracticeMode>
    )
}

describe('MainContainerPracticeMode component', () => {
    it('should renders without crashing', () => {
        const { container } = setup(defaultProps)
        expect(container).toBeInTheDocument()
    })

    it('should renders a component correctly with children value', () => {
        const { getByText } = setup({
            ...defaultProps,
            children: 'children content',
        })
        const buttonElement = getByText('children content')
        expect(buttonElement).toBeInTheDocument()
    })
})
