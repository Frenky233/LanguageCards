'use client'

import { CardComponent } from '@/components/server/card/component';
import { CardLoading } from '@/components/server/card/loading';
import { db } from '@/db/db.modal';
import { RootState } from '@/redux';
import { getAllCheckedCategories } from '@/redux/ui/categories';
import { getRandomCard } from '@/redux/ui/currentCards';
import { FC, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

export const CardClientContainer: FC = ({}) => {
    const [loading, setLoading] = useState(true);
    const [update, setUpdate] = useState(true);
    const [lastCardId, setLastCardId] = useState(-1);
    const selectedCard = useSelector((state: RootState) => getRandomCard(state, lastCardId));
    const categories = useSelector(getAllCheckedCategories);

    const card = useMemo(() => {
        return selectedCard;
    }, [update, selectedCard !== null]);
    
    useEffect(() => {
        setLoading(false);
    }, []);

    useEffect(() =>{
        if(card) getNextCardHandler();
    }, [JSON.stringify(categories)]);

    const getNextCardHandler = async() =>{
        await swipeCard();
        card?.id && setLastCardId(card.id);
        setUpdate(!update);
    }

    const submitAnswerToDB = async(isCorrect: boolean) =>{
        isCorrect
            ? await db.cards.update(card!.id!, {correct: card!.correct + 1})
            : await db.cards.update(card!.id!, {wrong: card!.wrong + 1})
    }

    const swipeCard = async() =>{
        const cardElement = document.getElementById('card');
        if(!cardElement) return;

        const {height, width} = cardElement.getBoundingClientRect();

        cardElement.style.height = height + 'px';
        cardElement.style.width = width + 'px';
        cardElement.dataset.swipe = 'true';
        document.body.style.overflow = 'hidden';

        await new Promise(r => setTimeout(r, 700));

        document.body.removeAttribute('style');
        cardElement.removeAttribute('data-swipe');
        cardElement.removeAttribute('data-correct');
        cardElement.removeAttribute('style');
    }

    if(loading || !card) return <CardLoading />;

    return <CardComponent submitAnswerToDB={submitAnswerToDB} getNextCard={getNextCardHandler} title={card.word} pronunciation={card.pronunciation} translations={card.translations}/>;
}