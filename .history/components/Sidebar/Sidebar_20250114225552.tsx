import styles from './Sidebar.module.css';
import { SidebarProps } from './Sidebar.props';

function Sidebar({ ...props }: SidebarProps) {
  return <div {...props}>Sudibar</div>;
}

export default Sidebar;
