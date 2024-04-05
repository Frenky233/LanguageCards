import styles from './styles.module.scss';
import { Sidebar } from '@/components/server/sidebar/component';
import { CardContainer } from '@/components/server/card/container';
import { Inter } from 'next/font/google';
import clsx from 'clsx';
import { SidebarToggleContainer } from '@/components/client/sidebarToggleButton/container';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {
  return (
    <div className={clsx(styles.index, inter)}>
      <Sidebar />
      <div className={styles.wrapper} id='cardWrapper'>
          <SidebarToggleContainer />
        <CardContainer />
      </div>
    </div>
  );
}
