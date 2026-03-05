import { describe, test, expect } from 'vitest'
import { GetGifsByQuery } from './get-gifs-by-query.action'

describe('GetGifsByQuery', () => {

    test('should return an array of gifs', async () => {
        const gifs = await GetGifsByQuery('cats')
        expect(Array.isArray(gifs)).toBe(true)
        expect(gifs.length).toBeGreaterThan(0)
        expect(gifs[0]).toHaveProperty('id') 
        expect(gifs[0]).toHaveProperty('title')
        expect(gifs[0]).toHaveProperty('url')
    
    })
})