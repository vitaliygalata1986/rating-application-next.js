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
  const [ratingArray, serRatingArray]
  return <div {...props}>{children}</div>;
}

export default Rating;
