import { ReactNode } from 'react';

export interface ButtonProps extends  {
  children: ReactNode;
  appearance: 'primary' | 'gost';
}
