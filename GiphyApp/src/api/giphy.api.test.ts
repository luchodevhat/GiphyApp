import { describe, test, expect } from 'vitest'
import { giphyApi } from './giphy.api'

describe('giphy.api', () => {
    test('should have the correct baseURL', () => {
        expect(giphyApi.defaults.baseURL).toBe('https://api.giphy.com/v1/gifs')
    })

    test('should have the correct default params', () => {
        expect(giphyApi.defaults.params).toEqual({
            lang: 'es',
            api_key: import.meta.env.VITE_GIPHY_API_KEY
        })
    })
  
})