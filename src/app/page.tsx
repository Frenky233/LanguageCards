import styles from './styles.module.scss';
import { SideBar } from '@/components/server/sidebar/component';
import { CardContainer } from '@/components/server/card/container';
import { Inter } from 'next/font/google';
import clsx from 'clsx';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {
  return (
    <div className={clsx(styles.index, inter)}>
      <SideBar />
      <CardContainer />
    </div>
  );
}
