import axios from 'axios';
import type { GiphyResponse } from '../Interfaces/giphy.response';
import type { Gif } from '../Interfaces/gif.interface';




export const GetGifsByQuery = async(query:string): Promise<Gif[]> => {

    const response = await axios.get<GiphyResponse>('https://api.giphy.com/v1/gifs/search', {
        params: {
            q:query,
            limit:20,
            lang:'es',
            api_key: import.meta.env.VITE_GIPHY_API_KEY
        }
    });
    return response.data.data.map((Gif) => ({
        id: Gif.id,
        title: Gif.title,
        url: Gif.images.original.url,
        width: Number(Gif.images.original.width),
        height: Number(Gif.images.original.height),
    }));
};