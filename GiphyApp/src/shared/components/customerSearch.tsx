interface Props {
    inputType: string;
    placeHolder?: string;
}

export const CustomSearch = ({inputType, placeHolder }:Props) => {
    return (
        <>
            <div className="search-container">
                <input type={inputType} placeholder={placeHolder} />
                <button>Buscar</button>
            </div>
        </>
    )
}