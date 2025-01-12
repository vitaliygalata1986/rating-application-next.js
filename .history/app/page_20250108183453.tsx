import { Metadata } from '@/node_modules/next/types';
import Htag from './components/Htag/Htag';
import styles from './page.module.css';

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
      <Button></Button>
    </>
  );
}
