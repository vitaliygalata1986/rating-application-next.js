import styles from './Paragraph.module.css';
import { ParagraphProps } from './Tag.props';
import cn from 'classnames';

// явно вытаскиваем: appearance, children, className
// все остальные помещаем в props
function Tag({
  size = 'small',
  children,
  color = 'ghost',
  className,
  ...props
}: ParagraphProps) {
  return <div
  
  >{children}</div>;
}

export default Tag;
