import styles from './Header.module.css';
import { HeaderProps } from './Header.props';

function Header({ ...props }: HeaderProps) {
  return <div {...props}>Header</div>;
}

export default Header;
