import { HTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface ParagraphProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>, // Это должно быть HTMLParagraphElement, а не HTMLButtonElement
    HTMLParagraphElement
  > {
  children: ReactNode;
  appearance: 'small' | 'medium' | 'big';
}
