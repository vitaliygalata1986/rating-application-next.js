import { Button } from './Button.props';
import styles from './Button.module.css';

function Button({ tag, children }: Button) {
  return (
    <>
      <button className={styles.h1}>{children}</button>
    </>
  );
}

export default Button;
