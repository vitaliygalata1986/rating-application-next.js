import { HtagProps } from './Htag.props';
import styles from 'Htag.module.css';

function Htag({ tag, children }: HtagProps) {
  return (
    <>
      {tag === 'h1' && <h1c>{children}</h1c>}
      {tag === 'h2' && <h2>{children}</h2>}
      {tag === 'h3' && <h3>{children}</h3>}
    </>
  );
}

export default Htag;
