import { HtagProps } from './Htag.props';
import styles from 'Htag.module.css';

function Htag({ tag, children }: HtagProps) {
  return (
    <>
      {tag === 'h1' && <h1 classname>{children}</h1>}
      {tag === 'h2' && <h2 classname>{children}</h2>}
      {tag === 'h3' && <h3 classname>{ classnamechildren}</h3>}
    </>
  );
}

export default Htag;
