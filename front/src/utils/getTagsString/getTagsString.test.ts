import {getTagsString} from './getTagsString.ts'

// eslint-disable-next-line no-undef
describe('getTagsString', () => {
    // eslint-disable-next-line no-undef
    it('many tags', () => {
        const tags = ['action', 'racing', 'mmorpg']
        const expectedOutput = 'action.racing.mmorpg'

        const result = getTagsString(tags)
        // eslint-disable-next-line no-undef
        expect(result).toBe(expectedOutput)
    })
    // eslint-disable-next-line no-undef
    it('single tag', () => {
        const tags = ['moba']
        const expectedOutput = 'moba'

        const result = getTagsString(tags)
        // eslint-disable-next-line no-undef
        expect(result).toBe(expectedOutput)
    })
    // eslint-disable-next-line no-undef
    it('zero tags', () => {
        const tags: string[] = []
        const expectedOutput = ''

        const result = getTagsString(tags)
        // eslint-disable-next-line no-undef
        expect(result).toBe(expectedOutput)
    })
})
