import { HTMLAttributes, DetailedHTMLProps } from 'react';

export interface RatingProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isEditable?: boolean; // редактируемый ли рейтинг
  rating: number; // рейтинг
  setRating: (rating: number) => void; // функция для изменения рейтинга
}
