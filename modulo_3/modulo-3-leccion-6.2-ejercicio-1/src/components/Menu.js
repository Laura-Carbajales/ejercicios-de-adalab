import Link from './Link';

const Menu = () => {
  return (
    <nav>
      <ul className='menu'>
        <Link href='https://adalab.es/blog/' title='Enlace al blog' text='Blog' openInNewTab />
        <Link href='https://adalab.es/contacto/' title='Enlace a contacto' text='Contacto' />
      </ul>
    </nav>
  );
};

export default Menu;
