import '../styles/App.scss';
import menuIcon from '../images/lista.png';
import searchIcon from '../images/search.png';
import logoImg from '../images/girl.png';
import backIcon from '../images/arrow.png';
import { useState } from 'react';

function App() {
  const [menu, setMenu] = useState(false);

  const handleToggleMenu = () => {
    setMenu(!menu);
  };
  const renderComposeMenu = () => {
    if (menu === true) {
      return (
        <nav className='header__nav'>
          <img className='header__nav--icon' src={backIcon} alt='' onClick={handleToggleMenu} />
          <h2 className='header__nav--title'>Menú</h2>
        </nav>
      );
    }
  };

  return (
    <div>
      <header className='header'>
        <img className='header__menu' src={menuIcon} alt='' onClick={handleToggleMenu} />
        <h1 className='header__title'>Materiales del curso</h1>
        <img className='header__search' src={searchIcon} alt='' />
      </header>
      {renderComposeMenu()}
      <main className='main'>
        <h2 className='main__title'>Introducción</h2>
        <div className='main__div'>
          <img className='main__div--img' src={logoImg} alt='' />
        </div>
        <h3 className='main__subtitle'>Materiales del curso de programación</h3>
        <p className='main__text'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea quae, quibusdam deserunt
          nihil consequatur magni error officia quasi! Sed nesciunt quaerat soluta non earum modi
          perferendis necessitatibus facere molestias vel!
        </p>
      </main>
    </div>
  );
}

export default App;
