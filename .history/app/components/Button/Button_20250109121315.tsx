import styles from './Button.module.css';
import { ButtonProps } from './Button.props';
import cn from 'classnames';

// явно вытаскиваем: appearance, children, className
// все остальные помещаем в props
function Button({
  appearance,
  arrow="none",
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
      {arrow !='none' && <></>}
    </button>
  );
}

export default Button;
