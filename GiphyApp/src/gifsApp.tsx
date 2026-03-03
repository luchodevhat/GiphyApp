import { useState } from "react"
import { CustomHeader } from "./shared/components/customHeader"
import { CustomSearch } from "./shared/components/customerSearch"
import { PreviousSearches } from "./gifs/components/previousSearches"
import { GifList } from "./gifs/components/gifList"
import {GetGifsByQuery} from "./gifs/components/actions/get-gifs-by-query.action"
import type { Gif } from "./gifs/components/Interfaces/gif.interface"

export const GifsApp = () => {

    const [searches, setSearches] = useState<string[]>([])
    const [gifs, setGifs] = useState<Gif[]>([])

    const handleTermClick = (search: string) => {
        console.log(searches)
    }
    
    const handleSearch = async(query: string = '') => {
        query = query.trim().toLowerCase()

        if(query.length === 0) return;

        if (searches.includes(query)) return;

        if(searches.includes(query)) return;

        setSearches([query, ...searches.splice(0, 7)]);

    const gifs = await GetGifsByQuery(query);
    setGifs(gifs);
    }
    

    return (
        <>
            {/* header */}
            <CustomHeader title="Buscador de Gifs" description="Descubre y comparte el Gif perfecto"/>

            {/* search */}
            <CustomSearch inputType="text" placeHolder="Buscar" handleSearch={handleSearch}/>
            
            {/* Busquedas previas */}
            <PreviousSearches searches={searches} onSearch={handleTermClick} />

            {/* Gifs */}
            <GifList gifs={gifs} />

        </>
    )
}