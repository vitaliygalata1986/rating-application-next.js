import styles from './Button.module.css';
import { ButtonProps } from './Button.props';
import cn from 'classnames';

// явно вытаскиваем: appearance, children, className
// все остальные помещаем в 
function Button({ appearance, children, className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(styles.btn, className, {
        [styles.primary]: appearance == 'primary',
        [styles.gost]: appearance == 'gost',
      })}
    >
      {children}
    </button>
  );
}

export default Button;
