import '../styles/App.scss';
import { useState } from 'react';

function App() {
  const [result, setResult] = useState(0);
  const handleIncrease = (ev) => {
    setResult(result + 1);
  };
  const handleDecrease = (ev) => {
    setResult(result - 1);
  };
  const handleReset = (ev) => {
    setResult(0);
  };

  return (
    <div>
      <p>Contador: {result}</p>
      <button onClick={handleIncrease}>Incrementar</button>
      <button onClick={handleDecrease}>Decrementar</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
