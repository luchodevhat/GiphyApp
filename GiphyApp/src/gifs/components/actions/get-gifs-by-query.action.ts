import axios from 'axios';
import type { GiphyResponse } from '../Interfaces/giphy.response';
import type { Gif } from '../Interfaces/gif.interface';
import { giphyApi } from '../../../api/giphy.api';




export const GetGifsByQuery = async(query:string): Promise<Gif[]> => {

    const response = await giphyApi.get<GiphyResponse>('/search', {
        params: {
            q:query,
            limit:20,
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