import formatMDtoJSON from './formatMDtoJSON.mjs'

describe('formatMDtoJSON', () => {
    it('should parse markdown to JSON format', () => {
        const markdown = `### Question 1
- [x] Answer 1
- [ ] Answer 2
- [x] Answer 3

### Question 2
- [ ] Answer A
- [x] Answer B
- [ ] Answer C
`

        const expectedOutput = [
            {
                position: 1,
                question: 'Question 1',
                answers: ['Answer 1', 'Answer 2', 'Answer 3'],
                correctAnswer: ['Answer 1', 'Answer 3'],
            },
            {
                position: 2,
                question: 'Question 2',
                answers: ['Answer A', 'Answer B', 'Answer C'],
                correctAnswer: ['Answer B'],
            },
        ]

        const result = formatMDtoJSON(markdown)
        expect(result).toEqual(expectedOutput)
    })
})
