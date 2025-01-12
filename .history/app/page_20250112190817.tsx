'use client';

import { Metadata } from '@/node_modules/next/types';
import Htag from './components/Htag/Htag';
import Button from './components/Button/Button';
import styles from './page.module.css';
import Paragraph from './components/Paragraph/Paragraph';
import Tag from './components/Tag/Tag';
import { useEffect, useState } from 'react';
import Rating from './components/Rating/Rating';

/*
export const metadata: Metadata = {
  title: 'Our project Page',
  description: 'Generated by Page',
  openGraph:[
    {}
  ]
};
*/
/*
export async function generateMetadata(): Promise<Metadata> {
  // вычисления - сходить на бек-енд, получить мета-данные
  return {
    title: 'ComputedMeta',
    // icons: {
    //   icon: '/smth.ico',
    // },
  };
}
*/

export default function Home() {
  const [counter, setCounter] = useState<number>(0);
  const [rating, setCounter] = useState<number>(0);

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
      <Htag tag='h1'>{counter}</Htag>
      <Button
        appearance='primary'
        arrow='right'
        className='btn-primary'
        onClick={() => setCounter((state) => (state += 1))}
      >
        Узнать подробнее
      </Button>
      <Button appearance='gost' arrow='down'>
        Узнать подробнее
      </Button>
      <Paragraph size='big'>Текст</Paragraph>
      <Paragraph size='small'>Текст</Paragraph>
      <Paragraph>Текст</Paragraph>
      <Tag size='small' href='https://google.com'>
        text
      </Tag>
      <Tag size='medium' href='https://google.com'>
        text
      </Tag>
      <Tag size='medium' color='grey'>
        text
      </Tag>
      <Tag size='medium' color='green'>
        text
      </Tag>
      <Tag color='red' href='https://google.com'>
        text
      </Tag>
      <Tag size='medium' color='primary' href='https://google.com'>
        text
      </Tag>
      <Rating rating={1} isEditable={true} />
    </>
  );
}
