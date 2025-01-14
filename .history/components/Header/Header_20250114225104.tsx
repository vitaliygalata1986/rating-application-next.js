import styles from './Header.module.css';
import { HeaderProps } from './Header.props';

// явно вытаскиваем: appearance, children, className
// все остальные помещаем в props
function Header({ ...props }: HeaderProps) {
  return <div {...props}>Header</div>;
}

export default Header;
