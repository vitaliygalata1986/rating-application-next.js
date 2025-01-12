import { HTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface RatingProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  children: ReactNode;
  size?: 'small' | 'medium' | 'big';
}
