import '../styles/App.scss';
// Fichero src/components/App.js
import { useState } from 'react';

const App = () => {
  // Estados

  const [series, setSeries] = useState([
    { id: '123', name: 'Juego de tronos' },
    { id: '456', name: 'Las chicas Gilmore' },
    { id: '678', name: 'Gambita de Dama' },
  ]);
  const [favorites, setFavorites] = useState([]);

  const [searchName, setSearchName] = useState('');
  const [searchIsFavorite, setSearchIsFavorite] = useState(false);

  // Eventos

  const handleFavorite = (ev) => {
    const clickedSerieId = ev.currentTarget.id;
    const foundFavoriteSerie = favorites.find((favorite) => favorite.id === clickedSerieId);
    let newFavorites = [];
    if (foundFavoriteSerie === undefined) {
      const foundSerie = series.find((serie) => serie.id === clickedSerieId);
      newFavorites = [...favorites, foundSerie];
    } else {
      newFavorites = favorites.filter((favorite) => favorite.id !== clickedSerieId);
    }
    setFavorites(newFavorites);
  };

  const handleSearchName = (ev) => {
    setSearchName(ev.target.value);
  };

  const handleSearchIsFavorite = (ev) => {
    setFavorites(ev.target.checked);
  };

  // Funciones de renderizado

  const renderSeries = () => {
    return (
      series
        // Filtramos por nombre
        .filter((serie) => {
          return serie.name.toLowerCase().includes(searchName.toLowerCase());
        })
        // Filtramos por favorito
        .filter((serie) => {
          if (searchIsFavorite === true) {
            return serie.isFavorite === true;
          } else {
            return true;
          }
        })
        // Mapeamos
        .map((serie) => {
          return (
            <li key={serie.id} id={serie.id} onClick={handleFavorite}>
              <h2>{serie.name}</h2>
              <p>Es mi serie favorita: {serie.isFavorite ? 'Sí' : 'No'}</p>
            </li>
          );
        })
    );
  };

  return (
    <div>
      <h1>Lista de series:</h1>

      <ul>{renderSeries()}</ul>

      <form>
        <label htmlFor='searchName'>Buscar por nombre de serie</label>
        <input type='text' id='searchName' value={searchName} onChange={handleSearchName} />
        <label htmlFor='searchIsFavorite'>Mostrar solo las favoritas</label>
        <input
          type='checkbox'
          id='searchIsFavorite'
          checked={searchIsFavorite}
          onChange={handleSearchIsFavorite}
        />
      </form>
    </div>
  );
};

export default App;
