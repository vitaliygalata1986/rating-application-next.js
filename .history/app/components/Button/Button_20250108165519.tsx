import styles from './Button.module.css';
import { ButtonProps } from './Button.props';
import cn

function Button({ appearance, children }: ButtonProps) {
  return <button className={styles.btn}>{children}</button>;
}

export default Button;
