import '../styles/App.scss';
import { useState } from 'react';

const App = () => {
  const [potato, setPotato] = useState(false);
  const [eggs, setEggs] = useState(false);
  const [onion, setOnion] = useState(false);
  const [macaroni, setMacaroni] = useState(false);
  const [beer, setBeer] = useState(false);
  const [wallnuts, setWallnuts] = useState(false);

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  const handleMark = (ev) => {
    setPotato(true);
    setEggs(true);
    setOnion(true);
    setMacaroni(true);
    setBeer(true);
    setWallnuts(true);
  };
  const handleReset = () => {
    setPotato(false);
    setEggs(false);
    setOnion(false);
    setMacaroni(false);
    setBeer(false);
    setWallnuts(false);
  };

  const renderText = () => {
    let text = 'Eres un robot sin paladar';
    if (potato && eggs && onion) {
      text = 'Eres una persona concebollista';
    }
    return <p>{text}</p>;
  };

  const handleIngredients = (ev) => {
    if (ev.currentTarget.name === 'potato') {
      setPotato(ev.currentTarget.checked);
    } else if (ev.currentTarget.name === 'egss') {
      setEggs(ev.currentTarget.checked);
    } else if (ev.currentTarget.name === 'onion') {
      setOnion(ev.currentTarget.checked);
    }
  };
  return (
    <div>
      <h1>Selecciona los ingredientes de la tortilla de patatas</h1>
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <label htmlFor='macaroni'>Macarrones</label>
          <input
            type='checkbox'
            name='macaroni'
            id='macaroni'
            checked={macaroni}
            onChange={handleIngredients}
          />
        </div>
        <div>
          <label htmlFor='potato'>Patata</label>
          <input
            type='checkbox'
            name='potato'
            id='potato'
            checked={potato}
            onChange={handleIngredients}
          />
        </div>
        <div>
          <label htmlFor='wallnuts'>Nueces</label>
          <input
            type='checkbox'
            name='wallnuts'
            id='wallnuts'
            checked={wallnuts}
            onChange={handleIngredients}
          />
        </div>
        <div>
          <label htmlFor='eggs'>Huevos</label>
          <input
            type='checkbox'
            name='eggs'
            id='eggs'
            checked={eggs}
            onChange={handleIngredients}
          />
        </div>
        <div>
          <label htmlFor='onion'>Cebolla</label>
          <input
            type='checkbox'
            name='onion'
            id='onion'
            checked={onion}
            onChange={handleIngredients}
          />
        </div>
        <div>
          <label htmlFor='beer'>Cerveza</label>
          <input
            type='checkbox'
            name='beer'
            id='beer'
            checked={beer}
            onChange={handleIngredients}
          />
        </div>
        <div>
          <button onClick={handleMark}>Marcar todos</button>
          <button onClick={handleReset}>Desmarcar todos</button>
        </div>
      </form>
      {renderText()}
    </div>
  );
};

export default App;
