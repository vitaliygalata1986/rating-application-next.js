import styles from './Button.module.css';
import { ButtonProps } from './Button.props';
import cn from 'classnames';

// явно вытаскиваем: appearance, children, className
// все остальные помещаем в props
arrow: 'right' | 'down' | 'none';
function Button({
  appearance,
  arrow,
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(styles.btn, className, {
        [styles.primary]: appearance == 'primary',
        [styles.gost]: appearance == 'gost',
      })}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
