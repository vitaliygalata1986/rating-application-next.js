import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface ParagraphProps
  extends DetailedHTMLProps<
    HTMLParagraphElement<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  children: ReactNode;
  appearance: 'primary' | 'gost';
  arrow?: 'right' | 'down' | 'none';
}
