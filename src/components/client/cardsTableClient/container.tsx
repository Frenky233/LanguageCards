'use client'

import { FC } from 'react';
import { CardsTableClientComponent } from './component';
import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '@/db/db.modal';

export const CardsTableClientContainer: FC = ({}) => {
    const cards = useLiveQuery(() => db.cards.toArray());

    return (
        <CardsTableClientComponent cards={cards!}/>
    );
}