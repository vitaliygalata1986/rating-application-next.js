'use client';

import { Metadata } from '@/node_modules/next/types';
import Htag from './components/Htag/Htag';
import Button from './components/Button/Button';
import styles from './page.module.css';
import Paragraph from './components/Paragraph/Paragraph';
import Tag from './components/Tag/Tag';
import { useEffect, useState } from 'react';
import Rating from './components/Rating/Rating';


export default function Home() {
  const [counter, setCounter] = useState<number>(0);
  const [rating, setRating] = useState<number>(4);

  useEffect(() => {
    console.log('Counter ' + counter);
    return function cleanup() {
      console.log('Unmount');
    };
  });

  useEffect(() => {
    console.log('Counter ' + counter);
    return function cleanup() {
      console.log('Unmount ');
    };
  }, [counter]);

  return (
    <>

    </>
  );
}
