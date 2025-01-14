import { HTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface LayoutProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLParagraphElement
  > {
  children: ReactNode;
  size?: 'small' | 'medium' | 'big';
}
