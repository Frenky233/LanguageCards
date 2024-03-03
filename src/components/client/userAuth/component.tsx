"use client"

import { FC } from 'react';
import styles from './styles.module.scss';
import { Button } from '@/components/client/button/component';
import clsx from 'clsx';

type Props ={
    className?: string;
    onClick: () => void;
}

export const UserAuthComponent: FC<Props> = ({className, onClick}) => {

    return (
        <div className={clsx(styles.userAuth, className)}>
            <Button onClick={onClick} variant={'Primary'}>Log In</Button>
        </div>
    );
}