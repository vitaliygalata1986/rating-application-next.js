import { Metadata } from '@/node_modules/next/types';
import Htag from './components/Htag/Htag';
import Button from './components/Button/Button';
import styles from './page.module.css';
import Paragraph from './components/Paragraph/Paragraph';
import Tag from './components/Tag/Tag';

/*
export const metadata: Metadata = {
  title: 'Our project Page',
  description: 'Generated by Page',
  openGraph:[
    {}
  ]
};
*/

export async function generateMetadata(): Promise<Metadata> {
  // вычисления - сходить на бек-енд, получить мета-данные
  return {
    title: 'ComputedMeta',
    // icons: {
    //   icon: '/smth.ico',
    // },
  };
}

export default function Home() {
  return (
    <>
      <Htag tag='h1'>Курсы по Photoshop</Htag>
      <Button appearance='primary' arrow='right' className='btn-primary'>
        Узнать подробнее
      </Button>
      <Button appearance='gost' arrow='down'>
        Узнать подробнее
      </Button>
      <Paragraph size='big'>Текст</Paragraph>
      <Paragraph size='small'>Текст</Paragraph>
      <Paragraph>Текст</Paragraph>
      <Tag size='size' href='https://google.com'>
        text
      </Tag>
    </>
  );
}
