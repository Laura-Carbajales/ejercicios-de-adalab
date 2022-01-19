import '../styles/App.scss';
import { useEffect, useState } from 'react';
import callToApi from '../services/api';

function App() {
  // Creamos series para guardar las series respondidas por el API, por eso es un array vacío
  const [series, setSeries] = useState([]);
  // Creamos searchName para gestionar el input de búsqueda, por eso es un string vacío
  const [searchName, setSearchName] = useState('');

  // useEffect
  useEffect(() => {
    // Llamamos al API pasando por parámetros el searchName
    callToApi(searchName).then((response) => {
      // Cuando el API responde guardamos las series en el estado
      setSeries(response);
    });
    // Este useEffect depende de searchName por eso ponemos [searchName]
    // Cuando la usuaria cambia el searchName este useEffect se vuelve a ejecutar porque necesitamos llamar otra vez al API para obtener nuevos datos
  }, [searchName]);

  // Eventos

  const handleSearchName = (ev) => {
    // Cuando la usuaria cambia el input guardamos su valor en el estado
    setSearchName(ev.target.value);
  };

  // Renderizado

  const renderSeries = () => {
    // Pintamos el listado de series respondido por el API
    return series.map((serie, index) => {
      // El API no nos devuelve un id para cada personaje, por eso usamos el index que nos da el map
      return (
        <li key={index}>
          Nombre: {serie.name} - Idioma: {serie.channel}
        </li>
      );
    });
  };
  return (
    <div>
      <h1>Llamar al API de Series:</h1>

      <form>
        <label htmlFor='name'>Busca por el nombre de tu serie favorita:</label>
        <input type='text' name='name' id='name' value={searchName} onChange={handleSearchName} />
      </form>

      <h2>Series con el nombre: {searchName}</h2>
      <ul>{renderSeries()}</ul>
    </div>
  );
}

export default App;
