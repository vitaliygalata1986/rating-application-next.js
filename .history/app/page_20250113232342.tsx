'use client';

import { Metadata } from '@/node_modules/next/types';
import styles from './page.module.css';


export const metadata: Metadata = {
  title: 'Our project',
  description: 'Generated by create next app',
};

export default function Home() {
  // useEffect(() => {
  //   console.log('Counter ' + counter);
  //   return function cleanup() {
  //     console.log('Unmount');
  //   };
  // });

  return <main>Home</main>;
}
