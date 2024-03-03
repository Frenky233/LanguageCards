"use client"

import { FC } from 'react';
import styles from './styles.module.scss';
import { useAuthForm } from './hooks/useAuthForm';
import { Input } from '../input/component';
import { Button } from '../button/component';
import clsx from 'clsx';

type Props ={
    className: string;
}

export const UserAuthFormContainer: FC<Props> = ({className}) => {
    const {form, setUser, setPassword} = useAuthForm();
    
    return (
        <div className={clsx(styles.userAuth, className)}>
            <Input type='text' id='name' value={form.user} onChange={setUser}>User Name</Input>
            <Input type='password' id='password' value={form.password} onChange={setPassword}>Password</Input>
            <Button variant='Primary'>Login</Button>
        </div>
    );
}