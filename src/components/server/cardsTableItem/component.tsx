'use client'

import { FC } from 'react';
import styles from './styles.module.scss';
import { Card, db } from '@/db/db.modal';
import PlusCircleIcon from '@public/plusCircleIcon.svg'
import { Button } from '@/components/client/button/component';
import { CardsTableDeleteContainer } from '@/components/client/cardsTableDelete/container';

type Props = {
    card: Card
}

export const CardsTableItem: FC<Props> = ({card}) => {
    return (
        <div className={styles.cardsTableItem}>
            <div>{card.word}</div>
            <div>{card.translations.map((item, index) => 
                <span key={index}>{`'${item.toLocaleLowerCase()}'`}</span>
            )}</div>
            <div>{card.pronunciation}</div>
            <div>{card.categories}</div>
            <div><CardsTableDeleteContainer id={card.id!} className={styles.cardsTableItemDelete}/></div>
        </div>
    );
}