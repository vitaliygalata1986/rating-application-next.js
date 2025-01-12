import styles from './Button.module.css';
import { ButtonProps } from './Button.props';

function Button({ appearance, children }: ButtonProps) {
  return <button className={}>{children}</button>;
}

export default Button;
