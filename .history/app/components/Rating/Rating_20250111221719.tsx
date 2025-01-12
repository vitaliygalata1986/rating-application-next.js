import styles from './Paragraph.module.css';
import { RatingProps } from './Rating.props';
import cn from 'classnames';

// явно вытаскиваем: appearance, children, className
// все остальные помещаем в props
function Paragraph({
  size = 'medium',
  children,
  className,
  ...props
}: ParagraphProps) {
  return (
    <p
      className={cn(styles.p, className, {
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
