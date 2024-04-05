'use client'

import { CardComponent } from '@/components/server/card/component';
import { CardLoading } from '@/components/server/card/loading';
import { getCards } from '@/redux/ui/currentCards';
import { FC, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

export const CardClientContainer: FC = ({}) => {
    const [loading, setLoading] = useState(true);
    const [update, setUpdate] = useState(false);
    const [lastCardId, setLastCardId] = useState(-1);
    const cards = useSelector(getCards);
    const card = useMemo(() => {
        const getRandom = () => Math.floor(Math.random() * cards.length);
        let number = getRandom();

        if(cards.length > 1) while(number === lastCardId) number = getRandom();
        
        return cards[number];
    }, [JSON.stringify(cards), update]);

    useEffect(() => {
        setLoading(false);
    }, [update]);

    console.log(cards);
    

    const getNextCardHandler = async() =>{
        await swipeCard();
        setLoading(true);
        setUpdate(!update);
        setLastCardId(cards.indexOf(card));
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
    }

    useEffect(() =>{
        if(card && !cards.includes(card)) getNextCardHandler();
    }, [JSON.stringify(cards)]);

    if(loading || !card) return <CardLoading />;

    return <CardComponent getNextCard={getNextCardHandler} title={card.word} pronunciation={card.pronunciation} translations={card.translations}/>;
}