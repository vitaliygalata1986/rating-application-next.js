import styles from './Footer.module.css';
import { FooterProps } from './Footer.props';

function Footer({ ...props }: FooterProps) {
  return <footer {...props}>
    <div className="footer-left"></div>
    <div className="footer-left"></div>
  </footer>;
}

export default Footer;
