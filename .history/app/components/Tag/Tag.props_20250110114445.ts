import { HTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface ParagraphProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLD>,
    HTMLParagraphElement
  > {
  children: ReactNode;
  size?: 'small' | 'medium' | 'big';
}
