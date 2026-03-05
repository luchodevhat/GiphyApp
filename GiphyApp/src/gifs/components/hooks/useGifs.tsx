import { useState } from "react";
import {GetGifsByQuery} from "../actions/get-gifs-by-query.action"
import type { Gif } from "../Interfaces/gif.interface"

export const useGifs = () => {
    const [searches, setSearches] = useState<string[]>([])
        const [gifs, setGifs] = useState<Gif[]>([])
    
        const handleTermClick = (search: string) => {
            // when a previous term is clicked we could trigger a new search
            console.log('term clicked:', search);
            handleSearch(search);
        }
        
        const handleSearch = async(query: string = '') => {
            query = query.trim().toLowerCase()
    
            if(query.length === 0) return;
    
            if (searches.includes(query)) return;
    
            setSearches([query, ...searches.splice(0, 7)]);
    
            const newGifs = await GetGifsByQuery(query);
            setGifs(newGifs);
        }


  return {
    // props
    searches,
    gifs,
    // methods
    handleTermClick,
    handleSearch
  }
}

export default useGifs
