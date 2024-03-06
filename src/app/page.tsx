import styles from './styles.module.scss';
import { SideBar } from '@/components/server/sidebar/component';
import { CardContainer } from '@/components/server/card/container';

export default function Home() {
  return (
    <div className={styles.index}>
      <SideBar />
      <CardContainer />
    </div>
  );
}
