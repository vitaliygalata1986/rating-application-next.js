import styles from './Sidebar.module.css';
import { SidebarProps } from './Sidebar.props';
import cn from 'classnames';

// явно вытаскиваем: appearance, children, className
// все остальные помещаем в props
function Sidebar({ size = 'medium', children, className, ...props }: Sidebar) {
  return (
    <p
      className={cn(styles.p, className, {
        [styles.small]: size == 'small',
        [styles.medium]: size == 'medium',
        [styles.big]: size == 'big',
      })}
      {...props}
    >
      {children}
    </p>
  );
}

export default Paragraph;
