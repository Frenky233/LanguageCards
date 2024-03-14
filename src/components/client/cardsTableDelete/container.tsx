'use client'

import { db } from '@/db/db.modal';
import { FC, useCallback } from 'react';
import { CardsTableDeleteComponent } from './component';

type Props = {
    id: number;
    className?: string;
}

export const CardsTableDeleteContainer: FC<Props> = ({id, className}) => {
    const deleteClickHandler = useCallback(async () =>{
        await db.cards.delete(id);
    },[id])
    
    return (
        <CardsTableDeleteComponent onClick={deleteClickHandler} className={className}/>
    );
}