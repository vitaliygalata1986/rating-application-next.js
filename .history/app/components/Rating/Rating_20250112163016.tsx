import styles from './Rating.module.css';
import { RatingProps } from './Rating.props';
import cn from 'classnames';
import { JSX, useEffect, useState } from 'react';

function Rating({
  isEditable = false,
  rating,
  setRating,
  ...props
}: RatingProps) {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  ); // звездочки = это JSX.Element - изначально у нас 5 звездочек, заполним их фрагментами

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const constructRating = (currentRating: number) => {
    // обновленный массив
    const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
      return (
        <>
        
        </>

      );
    });
    setRatingArray(updatedArray);
  };

  const changeDisplay = (i: number) => {
    constructRating(i);
  };

  return (
    <div {...props}>
      {ratingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
}

export default Rating;
