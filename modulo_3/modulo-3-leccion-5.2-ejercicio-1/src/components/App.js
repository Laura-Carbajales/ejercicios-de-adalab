import '../styles/App.scss';
import callToApi from '../services/api';
import { useEffect, useState } from 'react';

function App() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    //
    callToApi().then((response) => {
      // Cuando el API responde guardamos las oeliculas en el estado
      setFilms(response);
    });
  }, []);

  return <div></div>;
}

export default App;
