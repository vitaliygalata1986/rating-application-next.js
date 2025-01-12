import { DetailedHTMLProps, ReactNode } from 'react';

export interface ButtonProps extends DetailedHTMLProps {
  children: ReactNode;
  appearance: 'primary' | 'gost';
}
