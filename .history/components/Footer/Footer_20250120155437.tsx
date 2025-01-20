import styles from './Footer.module.css';
import { FooterProps } from './Footer.props';
import cn from 'classnames';
import { format } from 'date-fns';

// format(new Date(), 'yyyy') - 

function Footer({ className, ...props }: FooterProps) {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <div className='footer-left'>
        
        OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены
      </div>
      <a href=''>Пользовательское соглашение</a>
      <a href=''>Пользовательское соглашение</a>
    </footer>
  );
}

export default Footer;
