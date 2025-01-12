import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface ParagraphProps
  extends DetailedHTMLProps<
    HTMLElement<HTMLPar>,
    HTMLParagraphElement
  > {
  children: ReactNode;
  appearance: 'primary' | 'gost';
  arrow?: 'right' | 'down' | 'none';
}
