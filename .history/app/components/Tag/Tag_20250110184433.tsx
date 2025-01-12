import styles from './Tag.module.css';
import { TagProps } from './Tag.props';
import cn from 'classnames';

// явно вытаскиваем: appearance, children, className
// все остальные помещаем в props
function Tag({
  size = 'small',
  children,
  color = 'ghost',
  href,
  className,
  ...props
}: TagProps) {
  return (
    <div
      className={cn(styles.p, className, {
        [styles.small]: size == 'small',
        [styles.medium]: size == 'medium',
        [styles.ghost]: color == 'ghost',
        [styles.red]: color == 'red',
        [styles.grey]: color == 'grey',
        [styles.green]: color == 'green',
        [styles.primary]: color == 'primary',
      })}
    >
      {href ? <a href={href}>{children}</a> : children}
    </div>
  );
}

export default Tag;
