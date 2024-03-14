'use client'

import { CardComponent } from '@/components/server/card/component';
import { CardLoading } from '@/components/server/card/loading';
import { db } from '@/db/db.modal';
import { useLiveQuery } from 'dexie-react-hooks';
import { FC } from 'react';

export const CardClientContainer: FC = ({}) => {
    const cards = useLiveQuery(async () =>{
        const cards = await db.cards
            .where('word')
            .equalsIgnoreCase('私')
            .toArray();
        return cards;
    }, [])

    if(!cards){
        return <CardLoading />
    }

    let word: string = 'test'
    let pronunciation: string = 'test'

    if(cards[0]){
        word = cards[0].word;
        pronunciation = cards[0].pronunciation
    }

    return (
        <CardComponent title={word} pronunciation={pronunciation}/>
    );
}