import React from 'react';
import styles from './Header.module.css';
import { HeaderProps } from './Header.props';

function Header({ ...props }: HeaderProps) {
  return <header {...props}>Header</header>;
}

export default Header;
