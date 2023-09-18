import React from 'react'
import { render } from '@testing-library/react'
import Question from './Question.component'
import { IQuestion } from './Question.d'

describe('Question component', () => {
    const defaultProps: IQuestion = {
        question: 'Sample Question',
    }

    const setup = (props: Partial<typeof defaultProps> = {}) => {
        const mergedProps = { ...defaultProps, ...props }
        return render(<Question {...mergedProps} />)
    }

    it('should render without crashing', () => {
        const { container } = setup()
        expect(container).toBeInTheDocument()
    })

    it('should render the correct question text', () => {
        const { getByText } = setup()
        expect(getByText(defaultProps.question)).toBeInTheDocument()
    })
})
