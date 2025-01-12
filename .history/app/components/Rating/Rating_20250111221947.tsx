import styles from './Rating.module.css';
import { RatingProps } from './Rating.props';
import cn from 'classnames';

// явно вытаскиваем: appearance, children, className
// все остальные помещаем в props
function Rating({ isEditable: false, rating, setRating, className, ...props {
  constructor(parameters) {
    
  }
}}: RatingProps) {
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

export default Rating;
