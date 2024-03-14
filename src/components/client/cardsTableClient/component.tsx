import { FC } from 'react';
import styles from './styles.module.scss';
import { Card } from '@/db/db.modal';
import { CardsTableItem } from '@/components/server/cardsTableItem/component';
import { Inter } from 'next/font/google';
import clsx from 'clsx';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
  })

type Props = {
    cards: Card[];
}

export const CardsTableClientComponent: FC<Props> = ({cards}) => {
    return (
        <div className={clsx(styles.cardsTable, inter)}>
            <div className={styles.cardsTableHeader}>
                <div>Word</div>
                <div>Translation</div>
                <div>Pronunciation</div>
                <div>Category</div>
                <div></div>
            </div>
            {cards?.map((card, index) => 
                <CardsTableItem card={card} key={index}/>
            )}     
        </div>
    );
}