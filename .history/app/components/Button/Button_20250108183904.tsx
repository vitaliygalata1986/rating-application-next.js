import styles from './Button.module.css';
import { ButtonProps } from './Button.props';
import cn from 'classnames';

function Button({ appearance, children }: ButtonProps) {
  return (
    <button
      className=cn{(styles.btn,
        {
          [styles.primary]: appearance == 'primary',
          [styles.gost]: appearance == 'gost',
        })
      })
    >
      {children}
    </button>
  );
}

export default Button;
