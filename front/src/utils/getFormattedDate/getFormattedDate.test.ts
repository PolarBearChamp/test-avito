import { formattedDate } from './getFormattedDate.ts'

jest.mock('date-fns', () => ({
    format: jest.fn(),
}))

describe('formattedDate', () => {
    it('correct input', () => {
        const date = '2023-08-31'
        const expectedFormattedDate = '31 августа 2023'

        const result = formattedDate(date)

        expect(result).toBe(expectedFormattedDate)
    })
})
