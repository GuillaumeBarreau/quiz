import { PropsWithChildren } from 'react'
import { render, fireEvent } from '@testing-library/react'
import InputCheckboxAnswer from './InputCheckboxAnswer.component'
import { IInputCheckboxAnswer } from './InputCheckboxAnswer.d'

const defaultProps: IInputCheckboxAnswer = {
    answer: 'answer',
    selectAnswers: ['answer'],
    handleClickSelectAnswers: () => jest.fn(),
    resultInputSelected: ['answer'],
    disabled: false,
}

const setup = (props: PropsWithChildren<IInputCheckboxAnswer>) => {
    return render(
        <InputCheckboxAnswer {...props}>{props.children}</InputCheckboxAnswer>
    )
}

describe('InputCheckboxAnswer component', () => {
    it('should renders without crashing', () => {
        const { container } = setup(defaultProps)
        expect(container).toBeInTheDocument()
    })

    it('should render a className inputCheckboxAnswer_container__selected for InputCheckboxAnswer if selectAnswers props is include to answer props', () => {
        const { getByTestId } = setup({
            ...defaultProps,
        })
        const element = getByTestId('InputCheckboxAnswer_component')
        expect(element.className).toContain(
            'inputCheckboxAnswer_container__selected'
        )
    })

    it('should not render a className inputCheckboxAnswer_container__selected for InputCheckboxAnswer if selectAnswers props is not include to answer props', () => {
        const { getByTestId } = setup({
            ...defaultProps,
            selectAnswers: ['fake answer'],
        })
        const element = getByTestId('InputCheckboxAnswer_component')
        expect(element.className).not.toContain(
            'inputCheckboxAnswer_container__selected'
        )
    })

    it('should render a className inputCheckboxAnswer_container__success for InputCheckboxAnswer if resultInputSelected props is success', () => {
        const { getByTestId } = setup({
            ...defaultProps,
            resultInputSelected: 'success',
        })
        const element = getByTestId('InputCheckboxAnswer_component')
        expect(element.className).toContain(
            'inputCheckboxAnswer_container__success'
        )
    })

    it('should render a className inputCheckboxAnswer_container__success for InputCheckboxAnswer if resultInputSelected props is errorSelected', () => {
        const { getByTestId } = setup({
            ...defaultProps,
            resultInputSelected: 'errorSelected',
        })
        const element = getByTestId('InputCheckboxAnswer_component')
        expect(element.className).toContain(
            'inputCheckboxAnswer_container__errorSelected'
        )
    })

    it('should render a className inputCheckboxAnswer_container__success for InputCheckboxAnswer if resultInputSelected props is errorNotSelected', () => {
        const { getByTestId } = setup({
            ...defaultProps,
            resultInputSelected: 'errorNotSelected',
        })
        const element = getByTestId('InputCheckboxAnswer_component')
        expect(element.className).toContain(
            'inputCheckboxAnswer_container__errorNotSelected'
        )
    })

    it('should render a className inputCheckboxAnswer_container__success for InputCheckboxAnswer if resultInputSelected props is null', () => {
        const { getByTestId } = setup({
            ...defaultProps,
            resultInputSelected: null,
        })
        const element = getByTestId('InputCheckboxAnswer_component')
        expect(element.className).not.toContain(
            'inputCheckboxAnswer_container__errorNotSelected'
        )
        expect(element.className).not.toContain(
            'inputCheckboxAnswer_container__errorSelected'
        )
        expect(element.className).not.toContain(
            'inputCheckboxAnswer_container__success'
        )
    })

    it('should contain a text answer if answer pros is define', () => {
        const { getByTestId } = setup({
            ...defaultProps,
        })
        const element = getByTestId('Checkbox_label')
        expect(element.textContent).toBe(defaultProps.answer)
    })
})
