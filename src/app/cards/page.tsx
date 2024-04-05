import styles from './styles.module.scss';
import { CardsTableContainer } from '@/components/server/cardsTable/container';


export default function Cards() {
    return (
      <div className={styles.cards}>
        <CardsTableContainer className={styles.cardsTable}/>
      </div>
    );
  }
  