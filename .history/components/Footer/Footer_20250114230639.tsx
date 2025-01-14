import styles from './Header.module.css';
import { FooterProps } from './Footer.props';

function Footer({ ...props }: FooterProps) {
  return <div {...props}>Header</div>;
}

export default Footer;
