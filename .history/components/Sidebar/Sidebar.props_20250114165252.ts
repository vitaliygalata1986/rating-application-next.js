import { HTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface SiProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  children: ReactNode;
  size?: 'small' | 'medium' | 'big';
}
