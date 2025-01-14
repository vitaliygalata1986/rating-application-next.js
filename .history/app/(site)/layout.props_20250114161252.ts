import { HTMLAttributes, HTMLDivElement, ReactNode } from 'react';

export interface LayoutProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  size?: 'small' | 'medium' | 'big';
}
