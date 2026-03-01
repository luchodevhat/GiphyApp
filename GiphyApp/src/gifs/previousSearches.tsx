interface Props {
    searches: string[];  // props pending
    onSearch: (search: string) => void;
}

export const PreviousSearches = ({searches, onSearch}: Props) => {
    return (
        <>
            <div className="previous-searches">
                <h2>Busquedas previas</h2>

                <ul className="previous-searches-list">
                    {searches.map((search) => (
                        <li key={search} onClick={() => onSearch(search)}>
                            {search}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}