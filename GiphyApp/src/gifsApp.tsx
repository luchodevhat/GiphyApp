import { useState } from "react"
import { mockGifs } from "./mock-data/gifs.mock"
import { CustomHeader } from "./shared/components/customHeader"
import { CustomSearch } from "./shared/components/customerSearch"
import { PreviousSearches } from "./gifs/previousSearches"
import { GifList } from "./gifs/gifList"

export const GifsApp = () => {

    const [searches, setSearches] = useState(['Goku', 'Elden Ring', 'Witcher', 'Metal Gears', 'Dragons Dogma'])

    const handleTermClick = (search: string) => {
        console.log(searches)
    }
    
    const handleSearch = (query: string) => {
        const term = query.trim().toLocaleLowerCase();
        if (!term) return; // continuar aca
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
            <GifList gifs={mockGifs} />

        </>
    )
}