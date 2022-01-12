import '../styles/App.scss';
import { useState } from 'react';

function App() {
  const [text, setText] = useState('');
  function replaceVowels(str) {
    return str.replace(/[aeiou]/gi, 'i');
  }
  const handleTranslate = (ev) => {
    setText(replaceVowels(ev.currentTarget.value));
  };
  return (
    <div>
      <form className='form'>
        <label htmlFor='translate'>Traduce tu frase:</label>
        <textarea
          id='translate'
          name='translate'
          rows='8'
          cols='8'
          onChange={handleTranslate}
        ></textarea>
      </form>
      <p>En MIMIMI se diría:{text}</p>
    </div>
  );
}

export default App;
