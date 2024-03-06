"use client"

import { FC } from 'react';
import styles from './styles.module.scss';
import { useSignupForm } from './hooks/useSignupForm';
import { Input } from '../input/component';
import { Button } from '../button/component';
import clsx from 'clsx';
import { useDebounce } from 'use-debounce';

type Props ={
    className: string;
}

export const UserSignupFormComponent: FC<Props> = ({className}) => {
    const {form, setUser, setEmail, setPassword} = useSignupForm();
    useDebounce(form, 200);
    
    return (
        <form className={clsx(styles.userAuthForm, className)}>
            <Input type='text' id='name' value={form.user} onChange={setUser}>User Name</Input>
            <Input type='email' id='email' value={form.email} onChange={setEmail}>Email</Input>
            <Input type='password' id='password' value={form.password} onChange={setPassword}>Password</Input>
            <Button variant='Primary' type='submit'>Sign up</Button>
        </form>
    );
}