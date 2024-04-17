'use client'

import { ChangeEvent, FC, MouseEvent, PropsWithChildren } from 'react';
import styles from './styles.module.scss';
import clsx from 'clsx';
import PlusCircleIcon from '@public/plusCircleIcon.svg';
import { Button } from '../button/component';

type Props = PropsWithChildren<{
    id: string;
    value: string | number;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    type: HTMLInputElement['type'];
    onDelete?: (event: MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    placeholder?: string;
    autoFocus?: boolean;
}>;

export const Input: FC<Props> = ({id, value, onChange, onDelete, type, className, placeholder, autoFocus, children}) => {
    return (
        <div className={clsx(styles.input, className)}>
            {children && <label htmlFor={id}>{children}</label>}
            <input id={id} type={type} value={value} onChange={onChange} placeholder={placeholder} autoFocus={autoFocus}/>
            {onDelete && <Button onClick={onDelete} className={styles.inputIcon}><PlusCircleIcon /></Button>}
        </div>
    );
}