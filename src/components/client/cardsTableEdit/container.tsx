'use client'

import { FC, useState } from 'react';
import { CardsTableEditComponent } from './component';
import { Card } from '@/db/db.modal';
import { ModalContainer } from '../modal/container';
import { AddCardForm } from '../addCardForm/component';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategoriesUnchecked } from '@/redux/ui/categories';
import { editCard } from '@/redux/ui/currentCards';

type Props = {
    card: Card;
}

export const CardsTableEditContainer: FC<Props> = ({card}) => {
    const [showEdit, setShowEdit] = useState(false);
    const categories = useSelector(getAllCategoriesUnchecked);
    const dispatch = useDispatch();

    const initialState = {
        word: card.word,
        translations: card.translations,
        pronunciation: card.pronunciation,
        categories: {
            ...categories,
            ...Object.keys(categories).includes(card.categories[0]) ? Object.fromEntries(card.categories.map(item => [item, true])) : undefined
        }
    }

    const onOpen = () =>{
        setShowEdit(true);
    }

    const onClose = () =>{
        setShowEdit(false);
    }

    const onSubmit = (form: {word: string, translations: string[], pronunciation: string, categories: Record<string, boolean>}) =>{
        const categories = Object.entries(form.categories).map(([name, checked]) => {
            if(checked) return name;
        }).filter(name => name) as string[];

        const formSubmit = {
            ...form,
            categories: categories,
            correct: 0,
            wrong: 0
        }

        dispatch(editCard({card: formSubmit, id: card.id!}));
        onClose();
    }
    
    return (
        <>
            <CardsTableEditComponent onClick={onOpen}/>
            {showEdit && <ModalContainer onClose={onClose}><AddCardForm onSubmit={onSubmit} initialState={initialState}/></ModalContainer>}
        </>
    );
}