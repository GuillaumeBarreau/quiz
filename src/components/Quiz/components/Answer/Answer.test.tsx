import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Answer from './Answer.component'
import { IAnswer } from './Answer'

jest.mock('./Answer.utils', () => ({
    getResultInputSelected: jest.fn(),
}))

const defaultProps: IAnswer = {
    optionAnswers: ['Option 1', 'Option 2', 'Option 3'],
    statusShown: false,
    correctAnswer: ['Option 2'],
    selectAnswers: ['Option 1'],
    indexAnswer: 1,
    handleClickSelectAnswers: jest.fn(),
}

const setup = (props: IAnswer) => {
    return render(<Answer {...props} />)
}

describe('Answer component', () => {
    const mockResultInputSelected = jest.fn()

    beforeEach(() => {
        mockResultInputSelected.mockReset()
        mockResultInputSelected.mockImplementation(() => true)
        require('./Answer.utils').getResultInputSelected =
            mockResultInputSelected
    })

    it('should render without crashing', () => {
        const { container } = setup({
            ...defaultProps,
        })
        expect(container).toBeInTheDocument()
    })

    it('should render correct number of input checkboxes', () => {
        const { getAllByTestId } = setup(defaultProps)
        const inputCheckboxes = getAllByTestId('InputCheckboxAnswer_component')
        expect(inputCheckboxes).toHaveLength(defaultProps.optionAnswers.length)
    })

    it('should call handleClickSelectAnswers when an input checkbox is clicked', () => {
        const { getByText } = setup(defaultProps)
        const inputCheckbox = getByText('Option 1')
        fireEvent.click(inputCheckbox)
        expect(defaultProps.handleClickSelectAnswers).toHaveBeenCalledTimes(1)
    })

    it('should call getResultInputSelected with the correct parameters', () => {
        setup(defaultProps)
        expect(mockResultInputSelected).toHaveBeenCalledWith({
            statusShown: defaultProps.statusShown,
            correctAnswer: defaultProps.correctAnswer,
            selectAnswers: defaultProps.selectAnswers,
            answer: 'Option 1',
        })
    })

    it('should pass correctAnswer prop to InputCheckboxAnswer components', () => {
        setup(defaultProps)
        expect(mockResultInputSelected).toHaveBeenCalledWith(
            expect.objectContaining({
                correctAnswer: defaultProps.correctAnswer,
            })
        )
    })

    it('should pass selectAnswers prop to InputCheckboxAnswer components', () => {
        setup(defaultProps)
        expect(mockResultInputSelected).toHaveBeenCalledWith(
            expect.objectContaining({
                selectAnswers: defaultProps.selectAnswers,
            })
        )
    })

    it('should pass statusShown prop to InputCheckboxAnswer components', () => {
        setup(defaultProps)
        expect(mockResultInputSelected).toHaveBeenCalledWith(
            expect.objectContaining({
                statusShown: defaultProps.statusShown,
            })
        )
    })
})
