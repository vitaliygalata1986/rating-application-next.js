import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface ParagraphProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  appearance: 'primary' | 'gost';
  arrow?: 'right' | 'down' | 'none';
}
