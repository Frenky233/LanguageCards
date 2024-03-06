"use client"

import { FC, useState } from 'react';
import styles from './styles.module.scss';
import { UserAuthComponent } from './component';
import { ModalContainer } from '../modal/container';
import { UserLoginFormComponent } from '../userLoginForm/component';
import { UserSignupFormComponent } from '../userSignupForm/component';


export const UserAuthContainer: FC = ({}) => {
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState('login');

    const onOpen = () =>{
        document.body.style.overflow = 'hidden';
        setShowModal(true);
    }

    const onLoginClick = () =>{
        setModalType('login');
        onOpen();
    }

    const onSignupClick = () =>{
        setModalType('signup');      
        onOpen();
    }

    const onClose = () =>{
        document.body.removeAttribute('style');
        setShowModal(false);
    }

    return (
        <>
            <UserAuthComponent onSignupClick={onSignupClick} onLoginClick={onLoginClick}/>
            {showModal && <ModalContainer onClose={onClose}>
                {modalType === 'login'
                    ?<UserLoginFormComponent className={styles.modal}/>
                    :<UserSignupFormComponent className={styles.modal}/>
                }
            </ModalContainer>}
        </>
    );
}