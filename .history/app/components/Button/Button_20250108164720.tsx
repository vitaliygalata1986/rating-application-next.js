import { Button } from './Button.props';
import styles from './Htag.module.css';

function Button({ tag, children }: HtagProps) {
  return (
    <>
      <button className={styles.h1}>{children}</button>
    </>
  );
}

export default Button;
