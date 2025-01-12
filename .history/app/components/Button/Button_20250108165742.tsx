import styles from './Button.module.css';
import { ButtonProps } from './Button.props';
import cn 'classnames'

function Button({ appearance, children }: ButtonProps) {
  return <button className={styles.btn,{
    [styles.primary]
  }}>{children}</button>;
}

export default Button;
