'use client'

import { FC, useState } from 'react';
import { AddCardComponent } from './component';
import { ModalContainer } from '../modal/container';
import { AddCardForm } from '../addCardForm/component';

type Props = {
    className?: string;
}

export const AddCardContainer: FC<Props> = ({className}) => {
    const [showModal, setShowModal] = useState(false);

    const onOpen = () =>{
        document.body.style.overflow = 'hidden';
        setShowModal(true);
    }

    const onClose = () =>{
        document.body.removeAttribute('style');
        setShowModal(false);
    }
    
    return (
        <>
            <AddCardComponent className={className} onOpen={onOpen}/>
            {showModal && <ModalContainer onClose={onClose}><AddCardForm/></ModalContainer>}
        </>
    );
}