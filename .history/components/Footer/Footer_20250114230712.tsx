import styles from './Header.module.css';
import { FooterProps } from './Footer.props';

function Footer({ ...props }: FooterProps) {
  return <footer {...props}>Header</а>;
}

export default Footer;
