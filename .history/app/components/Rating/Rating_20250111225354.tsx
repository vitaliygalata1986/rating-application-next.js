import styles from './Rating.module.css';
import { RatingProps } from './Rating.props';
import cn from 'classnames';
import { useState } from 'react';

function Rating({
  isEditable = false,
  rating,
  setRating,
  ...props
}: RatingProps) {
  const [ratingArray, serRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<div></>)
  ); // звездочки = это JSX.Element - изначально у нас 5 звездочек, заполним их фрагментами

  const constructRating = (currentRating: number) => {
    // обновленный массив
    const updatedArray = ratingArray.map((r: JSX.Element, i:number)=>{
        return (
          
        )
    })
  };

  return <div {...props}>{children}</div>;
}

export default Rating;
