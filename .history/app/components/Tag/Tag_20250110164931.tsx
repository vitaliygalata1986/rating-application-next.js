import styles from './Paragraph.module.css';
import { ParagraphProps } from './Tag.props';
import cn from 'classnames';

// явно вытаскиваем: appearance, children, className
// все остальные помещаем в props
function Tag({
  size = 'medium',
  children,
  className,
  ...props
}: ParagraphProps) {
  return (
    <p></p>
  );
}

export default Paragraph;
