import { FC } from 'react';
import styles from './styles.module.scss';
import { Card } from '@/db/db.modal'; // Remove later
import { CardsTableDeleteContainer } from '@/components/client/cardsTableDelete/container';
import { CardsTableEditContainer } from '@/components/client/cardsTableEdit/container';

type Props = {
    card: Card
}

export const CardsTableItem: FC<Props> = ({card}) => {
    return (
        <div className={styles.cardsTableItem}>
            <div>{card.word}</div>
            <div>{card.translations.reduce((acc, item, index) =>
                acc += `${index !== 0 ? ', ' : ''}` + `'${item}'`,
                ''
            )}</div>
            <div>{`'${card.pronunciation}'`}</div>
            <div>{card.categories.reduce((acc, item, index) =>
                acc += `${index !== 0 ? ', ' : ''}` + item,
                ''
            )}</div>
            <div className={styles.cardsTableItemControl}>
                <CardsTableEditContainer card={card}/>
                <CardsTableDeleteContainer id={card.id!}/>
            </div>
        </div>
    );
}