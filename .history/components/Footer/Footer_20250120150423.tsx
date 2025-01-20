import styles from './Footer.module.css';
import { FooterProps } from './Footer.props';

function Footer({ ...props }: FooterProps) {
  return <footer {...props}>.footer</footer>;
}

export default Footer;
