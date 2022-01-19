const Link = (props) => {
  const targetValue = props.openInNewTab ? '_blank' : '';
  return (
    <li className='item-menu'>
      <a href={props.href} title={props.title} target={targetValue}>
        {props.text}
      </a>
    </li>
  );
};

export default Link;
