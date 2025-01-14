'use client';

import { Metadata } from '@/node_modules/next/types';
import styles from './page.module.css';


export default function Home() {
  const [counter, setCounter] = useState<number>(0);
  const [rating, setRating] = useState<number>(4);

  // useEffect(() => {
  //   console.log('Counter ' + counter);
  //   return function cleanup() {
  //     console.log('Unmount');
  //   };
  // });


  return (
    <>

    </>
  );
}
