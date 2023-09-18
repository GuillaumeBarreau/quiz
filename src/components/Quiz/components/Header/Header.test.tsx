import React from 'react'
import { render } from '@testing-library/react'
import Header from './Header.component'
import { IHeader } from './Header.d'

describe('Header component', () => {
    const defaultProps: IHeader = {
        course: 'Sample Course',
        maxQuestions: 10,
        currentQuestion: 5,
    }

    const setup = (props: Partial<typeof defaultProps> = {}) => {
        const mergedProps = { ...defaultProps, ...props }
        return render(<Header {...mergedProps} />)
    }

    it('should render without crashing', () => {
        const { container } = setup()
        expect(container).toBeInTheDocument()
    })

    it('should render the correct course name', () => {
        const { getByText } = setup()
        expect(getByText(defaultProps.course)).toBeInTheDocument()
    })

    it('should render the VerticalBar component', () => {
        const { getByTestId } = setup()
        const verticalBar = getByTestId('VerticalBar_progress')
        expect(verticalBar).toBeInTheDocument()
    })

    it('should pass the correct progress to VerticalBar', () => {
        const { getByTestId } = setup()
        const verticalBar = getByTestId('VerticalBar_progress')
        expect(verticalBar).toHaveAttribute('style', 'width: 50%;')
    })

    it('should display "Practice Mode" text', () => {
        const { getByText } = setup()
        expect(getByText('Practice Mode')).toBeInTheDocument()
    })
})
