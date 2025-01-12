import { HtagProps } from './Htag.props';
import styles from './Htag.module.css';

function Button({ tag, children }: HtagProps) {
  return (
    <>
      <h1 className={styles.h1}>{children}</h1>
    </>
  );
}

export default Htag;
