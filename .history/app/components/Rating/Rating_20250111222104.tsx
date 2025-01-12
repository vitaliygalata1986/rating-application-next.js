import styles from './Rating.module.css';
import { RatingProps } from './Rating.props';
import cn from 'classnames';

// явно вытаскиваем: appearance, children, className
// все остальные помещаем в props
function Rating({
  isEditable = false,
  rating,
  setRating,
  ...props
}: RatingProps) {
  return (
    <div
      className={cn(styles.p, className, {
        [styles.small]: size == 'small',
        [styles.medium]: size == 'medium',
        [styles.big]: size == 'big',
      })}
      {...props}
    >
      {children}
    </div>
  );
}

export default Rating;
