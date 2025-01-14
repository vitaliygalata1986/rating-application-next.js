import styles from './Sidebar.module.css';
import { SidebarProps } from './Sidebar.props';

// явно вытаскиваем: appearance, children, className
// все остальные помещаем в props
function Sidebar({ ...props }: SidebarProps) {
  return <div {...props}>Sudibar</div>;
}

export default Sidebar;
