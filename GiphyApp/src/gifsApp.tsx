import { CustomHeader } from "./shared/components/customHeader"
import { CustomSearch } from "./shared/components/customerSearch"
import { PreviousSearches } from "./gifs/components/previousSearches"
import { GifList } from "./gifs/components/gifList"
import { useGifs } from "./gifs/components/hooks/useGifs"


export const GifsApp = () => {

    const { gifs, searches, handleSearch, handleTermClick } = useGifs();

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