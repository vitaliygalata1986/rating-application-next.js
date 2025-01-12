import styles from './Button.module.css';
import { ParagraphProps } from './Paragraph.props';
import cn from 'classnames';

// явно вытаскиваем: appearance, children, className
// все остальные помещаем в props
function Paragraph({ size="", children, className, ...props }: ParagraphProps) {
  return (
    <p
      className={cn(styles.btn, className, {
        [styles.small]: size == 'small',
        [styles.medium]: size == 'medium',
        [styles.big]: size == 'big',
      })}
      {...props}
    >
      {children}
    </p>
  );
}

export default Paragraph;
