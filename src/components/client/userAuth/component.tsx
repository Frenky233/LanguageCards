"use client"

import { FC } from 'react';
import styles from './styles.module.scss';
import { Button } from '@/components/client/button/component';

type Props ={
    onLoginClick: () => void;
    onSignupClick: () => void;
}

export const UserAuthComponent: FC<Props> = ({onLoginClick, onSignupClick}) => {
    return (
        <div className={styles.userAuth}>
            <Button onClick={onLoginClick} variant={'Primary'} className={styles.userAuthLogin}>Log In</Button>
            <Button onClick={onSignupClick} className={styles.userAuthSignup}>Sign Up</Button>
        </div>
    );
}