import { getTotal } from './getTotal.utils'

const mockData:string[] = ['$14,674.84', '$4,283.71', '$12,029.19']

describe('testing getTotal utility function', ()=> {
    test('array of usd dollar amounts adds up correctly', ()=> {
        const testedTotal = getTotal(mockData)
        expect(testedTotal).toBe('$30,987.74')
    })
})