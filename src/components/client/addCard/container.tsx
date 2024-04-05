'use client'

import { FC, useState } from 'react';
import { AddCardComponent } from './component';
import { ModalContainer } from '../modal/container';
import { AddCardForm } from '../addCardForm/component';
import { useDispatch, useSelector } from 'react-redux';
import { addCard } from '@/redux/ui/currentCards';
import { getAllCategoriesUnchecked } from '@/redux/ui/categories';

type Props = {
    className?: string;
}

export const AddCardContainer: FC<Props> = ({className}) => {
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    const categories = useSelector(getAllCategoriesUnchecked);
    
    const onOpen = () =>{
        document.body.style.overflow = 'hidden';
        setShowModal(true);
    }

    const onClose = () =>{
        document.body.removeAttribute('style');
        Object.keys(categories).forEach(item => categories[item] = false)
        setShowModal(false);
    }

    const onSubmit = (form: {word: string, translations: string[], pronunciation: string, categories: Record<string, boolean>}) =>{
        try{
            const categories = Object.entries(form.categories).map(([name, checked]) => {
                if(checked) return name;
            }).filter(name => name) as string[];

            const formSubmit = {
                ...form,
                categories: categories
            }

            dispatch(addCard(formSubmit));
        } catch (e) {
            console.log(e);
        }

        onClose();
    }

    const initialState = {
        word: '',
        translations: [],
        pronunciation: '',
        categories
    }

    return (
        <>
            <AddCardComponent className={className} onOpen={onOpen}/>
            {showModal && <ModalContainer onClose={onClose}><AddCardForm onSubmit={onSubmit} initialState={initialState}/></ModalContainer>}
        </>
    );
}