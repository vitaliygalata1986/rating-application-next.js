import { Metadata } from '@/node_modules/next/types';
import styles from './page'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Generated by create next app Home',
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
