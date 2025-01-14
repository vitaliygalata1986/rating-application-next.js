import styles from './Sidebar.module.css';
import { SidebarProps } from './Sidebar.props';
import cn from 'classnames';

// явно вытаскиваем: appearance, children, className
// все остальные помещаем в props
function Sidebar({
  size = 'medium',
  children,
  className,
  ...props
}: SidebarProps) {
  return (
    <p
      className={cn(styles.p, className, {
    
      })}
      {...props}
    >
      {children}
    </p>
  );
}

export default Paragraph;
