import styles from './Sidebar.module.css';
import { SidebarProps } from './Sidebar.props';
import cn from 'classnames';

// явно вытаскиваем: appearance, children, className
// все остальные помещаем в props
function Sidebar({ ...props }: SidebarProps) {
  return <div {...props}></div>;
}

export default Sidebar;
