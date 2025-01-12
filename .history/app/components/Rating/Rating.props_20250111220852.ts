import { HTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface RatingProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isEdi: ReactNode;
}
