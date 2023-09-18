import React from 'react'
import { render, fireEvent, getByTestId } from '@testing-library/react'
import QuizAnswers from './QuizAnswers.component'
import { IQuizAnswers } from './QuizAnswers.d'

describe('QuizAnswers component', () => {
    const defaultProps: IQuizAnswers = {
        questionsArray: [
            {
                question: 'Sample Question 1',
                answers: ['Answer 1', 'Answer 2'],
                correctAnswer: ['Answer 1'],
                position: 0,
            },
            {
                question: 'Sample Question 2',
                answers: ['Answer 1', 'Answer 2'],
                correctAnswer: ['Answer 2'],
                position: 1,
            },
        ],
        handleClickInputSelectAnswers: jest.fn(),
        stateStatusShown: false,
        handleClickButtonSubmit: jest.fn(),
        answers: [],
        stateQuestionNumber: 0,
        selectAnswers: [],
        stateCurrentQuestionCorrect: false,
        currentQuestion: 0,
    }

    const setup = (props: Partial<typeof defaultProps> = {}) => {
        const mergedProps = { ...defaultProps, ...props }
        return render(<QuizAnswers {...mergedProps} />)
    }

    it('should render without crashing', () => {
        const { container } = setup()
        expect(container).toBeInTheDocument()
    })

    it('should render the correct question index', () => {
        const { getByText } = setup()
        expect(getByText('Question: 1 / 2')).toBeInTheDocument()
    })

    it('should pass the correct questionsArray prop if stateQuestionNumber is index 0', () => {
        const { getByText } = setup()
        expect(
            getByText(defaultProps.questionsArray[0].question)
        ).toBeInTheDocument()
    })
    it('should pass the correct questionsArray prop if stateQuestionNumber is index 1', () => {
        const { getByText } = setup({ stateQuestionNumber: 1 })
        expect(
            getByText(defaultProps.questionsArray[1].question)
        ).toBeInTheDocument()
    })

    it('should pass the correct handleClickInputSelectAnswers prop', () => {
        const { getByText } = setup()
        const inputCheckbox = getByText('Answer 1')
        fireEvent.click(inputCheckbox)
        expect(
            defaultProps.handleClickInputSelectAnswers
        ).toHaveBeenCalledTimes(1)
    })

    it('should to be disabled if selectAnswers is empty', () => {
        const { getByTestId } = setup()
        const button = getByTestId('Button_component')
        expect(button).toBeDisabled()
    })

    it('should not to be disabled if selectAnswers is not empty', () => {
        const { getByTestId } = setup({
            answers: ['Answer 1'],
        })
        const button = getByTestId('Button_component')
        expect(button).not.toBeDisabled()
    })

    it('should pass the correct answers prop', () => {
        const { getByText } = setup({ answers: ['Answer 1'] })
        const button = getByText('Submit')
        expect(button).toBeInTheDocument()
    })

    it('should display the correct currentQuestion index', () => {
        const { getByText } = setup({ currentQuestion: 1 })
        expect(getByText('Question: 2 / 2')).toBeInTheDocument()
    })
})
