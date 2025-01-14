import { HTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface SidebarProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLParagraphElement
  > {
  children: ReactNode;
  size?: 'small' | 'medium' | 'big';
}
