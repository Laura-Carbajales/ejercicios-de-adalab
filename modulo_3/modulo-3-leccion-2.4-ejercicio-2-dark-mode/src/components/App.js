import '../styles/App.scss';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState('ligth');
  const handleColor = (ev) => {
    if (color === 'ligth') {
      setColor('dark');
    } else {
      setColor('ligth');
    }
  };

  const renderDarkModeText = () => {
    if (color === 'dark') {
      return <p className='text'>Tienes activado el dark mode</p>;
    } else {
      return null;
    }
  };

  return (
    <div className={color}>
      <button onClick={handleColor}>Des / activar el dark mode</button>
      {renderDarkModeText()}
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim saepe eum expedita eligendi
        molestias dignissimos sapiente eos, culpa aspernatur repellat iste quidem ducimus, iure
        necessitatibus libero. Beatae eligendi doloribus voluptas.
      </p>
    </div>
  );
}

export default App;
