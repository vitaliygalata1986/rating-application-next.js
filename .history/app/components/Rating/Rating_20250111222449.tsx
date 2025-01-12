import styles from './Rating.module.css';
import { RatingProps } from './Rating.props';
import cn from 'classnames';
import { useState } from 'react';

// явно вытаскиваем: appearance, children, className
// все остальные помещаем в props
function Rating({
  isEditable = false,
  rating,
  setRating,
  ...props
}: RatingProps) {
  const [ratingArray, serRatingArray] = useState<JSX.Element[]>(new Array(5).fill()); // звездочки = это JSX.Element
  return <div {...props}>{children}</div>;
}

export default Rating;
