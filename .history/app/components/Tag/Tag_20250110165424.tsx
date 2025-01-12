import styles from './Paragraph.module.css';
import { ParagraphProps } from './Tag.props';
import cn from 'classnames';

// явно вытаскиваем: appearance, children, className
// все остальные помещаем в props
function Tag({
  size = 'small',
  children,
  color = 'ghost',
  className,
  ...props
}: ParagraphProps) {
  return (
    <div
      className={cn(styles.p, className, {
        [styles.small]: size == 'small',
        [styles.medium]: size == 'medium',
        [styles.ghost]: color == 'ghost',
        [styles.red]: color == 'ghost',
        [styles.ghost]: color == 'ghost',
        [styles.ghost]: color == 'ghost',
        [styles.ghost]: color == 'ghost',
      })}
    >
      {children}
    </div>
  );
}

export default Tag;
