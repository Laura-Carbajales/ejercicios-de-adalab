import '../styles/App.scss';
import { useState } from 'react';

const App = () => {
  const [potato, setPotato] = useState(false);
  const [eggs, setEggs] = useState(false);
  const [onion, setOnion] = useState(false);

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
      <form className='form'>
        <div>
          <label htmlFor='macaroni'>Macarrones</label>
          <input type='checkbox' name='macaroni' id='macaroni' onChange={handleIngredients} />
        </div>
        <div>
          <label htmlFor='potato'>Patata</label>
          <input type='checkbox' name='potato' id='potato' onChange={handleIngredients} />
        </div>
        <div>
          <label htmlFor='wallnuts'>Nueces</label>
          <input type='checkbox' name='wallnuts' id='wallnuts' onChange={handleIngredients} />
        </div>
        <div>
          <label htmlFor='egss'>Huevos</label>
          <input type='checkbox' name='egss' id='egss' onChange={handleIngredients} />
        </div>
        <div>
          <label htmlFor='onion'>Cebolla</label>
          <input type='checkbox' name='onion' id='onion' onChange={handleIngredients} />
        </div>
        <div>
          <label htmlFor='beer'>Cerveza</label>
          <input type='checkbox' name='beer' id='beer' onChange={handleIngredients} />
        </div>
      </form>
      {renderText()}
    </div>
  );
};

export default App;
