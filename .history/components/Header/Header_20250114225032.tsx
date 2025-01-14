import styles from './Header.module.css';
import { SidebarProps } from './Sidebar.props';
import cn from 'classnames';

// явно вытаскиваем: appearance, children, className
// все остальные помещаем в props
function Header({ ...props }: SidebarProps) {
  return <div {...props}>Header</div>;
}

export default Header;
