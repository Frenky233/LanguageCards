"use client"

import { FC, useState } from 'react';
import styles from './styles.module.scss';
import { UserAuthComponent } from './component';
import { ModalContainer } from '../modal/container';
import { UserAuthFormContainer } from '../userAuthForm/container';

type Props ={
    className?: string;
}

export const UserAuthContainer: FC<Props> = ({className}) => {
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
            <UserAuthComponent onClick={onOpen} className={className} />
            {showModal && <ModalContainer onClose={onClose}><UserAuthFormContainer className={styles.modal}/></ModalContainer>}
        </>
    );
}