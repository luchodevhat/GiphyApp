import { mockGifs } from "./mock-data/gifs.mock"

export const GifsApp = () => {
    return (
        <>
            {/* header */}
            <div className="content-center">
                <h1>Buscador de Gifs</h1>
                <p>Descubre y comparte el Gif perfecto</p>
            </div>

            {/* search */}

            <div className="search-container">
                <input type="Buscar Gifs" placeholder="Buscar Gifs" />
                <button>Buscar</button>
            </div>

            {/* Busquedas previas */}

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

            {/* Gifs */}

            <div className="gifs-container">
                {mockGifs.map((gif) =>(
                    <div key={gif.id} className="gid-card">
                        <img src={gif.url} alt="gif.title" />
                        <h3>{gif.title}</h3>
                        <p>{gif.width}x{gif.height} (1.5mb)</p>

                    </div>
                ) )}

            </div>

        </>
    )
}