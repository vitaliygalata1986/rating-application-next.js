import styles from './Footer.module.css';
import { FooterProps } from './Footer.props';

function Footer({ ...props }: FooterProps) {
  return (
    <footer {...props}>
      <div className='footer-left'>OwlTop © 2020 - 2021 Все права защищены</div>
      <div className='footer-right'></div>
    </footer>
  );
}

export default Footer;
