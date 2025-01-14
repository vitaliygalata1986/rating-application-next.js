import { HTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface SidebarProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  size?: 'small' | 'medium' | 'big';
}
