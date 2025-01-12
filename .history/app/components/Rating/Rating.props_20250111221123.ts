import { HTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface RatingProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isEditable?: boolean; // редактируемый ли рейтинг
  rating: number; // рейтинг
  setRating: (rating: number) => void;
}
