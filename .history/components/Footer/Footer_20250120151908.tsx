import styles from './Footer.module.css';
import { FooterProps } from './Footer.props';

function Footer({ className, ...props }: FooterProps) {
  return (
    <footer className={cn(className)} {...props}>
      <div className='footer-left'>OwlTop © 2020 - 2021 Все права защищены</div>
      <div className='footer-right'>
        <a href=''>Пользовательское соглашение</a>
        <a href=''>Политика конфиденциальности</a>
      </div>
    </footer>
  );
}

export default Footer;
