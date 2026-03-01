interface Props {
    inputType: string;
    placeHolder?: string;  // props pending
}

export const PreviousSearches = () => {
    return (
        <>
            <div className="previous-searches">
                <h2>Busquedas previas</h2>
                <ul className="previous-searches-list">
                    <li>Goku</li>
                    <li>Elden Ring</li>
                    <li>Witcher</li>
                    <li>Metal Gears</li>
                    <li>Dragons Dogma</li>
                </ul>
            </div>
        </>
    )
}