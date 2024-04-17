"use client"

import { FC, PropsWithChildren, useEffect } from 'react';
import styles from './styles.module.scss';
import { createPortal } from 'react-dom';
import { ModalComponent } from './components';
import { useClickHandler } from './hooks/useClickHandler';
import { useKeyDownHandler } from './hooks/useKeyDownHandler';

type Props = PropsWithChildren<{
    onClose: () => void;
}>

export const ModalContainer: FC<Props> = ({children, onClose}) => {
    useClickHandler('modalBackground', onClose);
    useKeyDownHandler('Escape', onClose);

    useEffect(() =>{
        const layout = document.getElementById('layout')!;

        layout.style.pointerEvents  = 'none';
        document.body.style.overflow = 'hidden';

        return () => {
            layout.removeAttribute('style');
            document.body.removeAttribute('style');
        };
    }, [])

    return createPortal(
        <ModalComponent id='modalBackground' onClose={onClose}>{children}</ModalComponent>,
        document.body
    );
}