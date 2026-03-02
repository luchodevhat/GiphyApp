import { useState, useEffect } from "react"


interface Props {
    inputType: string;
    placeHolder?: string;
    handleSearch?: (query: string) => void;
}

export const CustomSearch = ({
    inputType,
    placeHolder,
    handleSearch = () => { },
}: Props) => {

    
    const [inputValue, setInputValue] = useState('')

    useEffect(() => {
        const timeOutId = setTimeout(() => {
            handleSearch(inputValue)
        }, 700)

        return () => clearTimeout(timeOutId)
    }, [inputValue, handleSearch])

    const onSearchClick = () => {
        handleSearch(inputValue)
        console.log(inputValue)
        setInputValue('')
    }

    return (
        <>
            <div className="search-container">
                <input type={inputType} placeholder={placeHolder} value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <button onClick={onSearchClick}>Buscar</button>
            </div>
        </>
    )
}