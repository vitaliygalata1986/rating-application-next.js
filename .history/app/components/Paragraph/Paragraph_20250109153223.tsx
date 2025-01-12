import styles from './Button.module.css';
import { ParagraphProps } from './Paragraph.props';
import cn from 'classnames';

// явно вытаскиваем: appearance, children, className
// все остальные помещаем в props
function Paragraph({
  appearance,
  children,
  className,
  ...props
}: ParagraphProps) {
  return (
    <p
      className={cn(styles.btn, className, {
        [styles.small]: appearance == 'small',
        [styles.medium]: appearance == 'medium',
        [styles.big]: appearance == 'big',
      })}
      {...props}
    >
      {children}
    </p>
  );
}

export default Button;
