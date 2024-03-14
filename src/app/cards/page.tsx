import { CardsSearchBar } from '@/components/client/cardsSearchBar/component';
import styles from './styles.module.scss';
import { CardsTableContainer } from '@/components/server/cardsTable/container';
import { AddCardContainer } from '@/components/client/addCard/container';


export default function Cards() {
    return (
      <div className={styles.cards}>
        <div className={styles.cardsControl}>
          <CardsSearchBar className={styles.cardsSearchBar}/>
          <AddCardContainer className={styles.cardsButton}/>
        </div>
        <CardsTableContainer className={styles.cardsTable}/>
      </div>
    );
  }
  