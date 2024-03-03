"use client"

import { FC, PropsWithChildren } from 'react';
import styles from './styles.module.scss';
import { Button } from '../button/component';
import Close from '@public/closeIcon.svg';
 
type Props = PropsWithChildren<{
    onClose: () => void;
    id: string;
}>

export const ModalComponent: FC<Props> = ({children, onClose, id}) => {
    return (
    <div id={id} className={styles.backdrop}>
        <div className={styles.modal}>
            <div className={styles.modalTitle}>
                <Button onClick={onClose} className={styles.modalExit}><Close /></Button>
            </div>    
            {children}
        </div>
    </div>    
    );
}