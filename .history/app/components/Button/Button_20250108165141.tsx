import styles from './Button.module.css';
import { ButtonProps } from './Button.props';

function Button({ appearance, children }: ButtonProps) {
  return (
    <>
      <button className={styles.h1}>{children}</button>
    </>
  );
}

export default Button;
