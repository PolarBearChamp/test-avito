import { getTagsString } from './getTagsString.ts'

describe('getTagsString', () => {
    it('many tags', () => {
        const tags = ['action', 'racing', 'mmorpg']
        const expectedOutput = 'action.racing.mmorpg'

        const result = getTagsString(tags)

        expect(result).toBe(expectedOutput)
    })

    it('single tag', () => {
        const tags = ['moba']
        const expectedOutput = 'moba'

        const result = getTagsString(tags)

        expect(result).toBe(expectedOutput)
    })

    it('zero tags', () => {
        const tags = []
        const expectedOutput = ''

        const result = getTagsString(tags)

        expect(result).toBe(expectedOutput)
    })
})
