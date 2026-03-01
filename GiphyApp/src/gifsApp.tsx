import { mockGifs } from "./mock-data/gifs.mock"
import { CustomHeader } from "./shared/components/customHeader"
import { CustomSearch } from "./shared/components/customerSearch"
import { PreviousSearches } from "./gifs/previousSearches"
import { GifList } from "./gifs/gifList"

export const GifsApp = () => {
    return (
        <>
            {/* header */}
            <CustomHeader title="Buscador de Gifs" description="Descubre y comparte el Gif perfecto"/>

            {/* search */}
            <CustomSearch inputType="text" placeHolder="Buscar" />
            
            {/* Busquedas previas */}
            <PreviousSearches />

            {/* Gifs */}
            <GifList />

        </>
    )
}