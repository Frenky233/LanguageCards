'use client'

import { FC, PropsWithChildren } from 'react';
import styles from './styles.module.scss';
import clsx from 'clsx';

type Props = PropsWithChildren<{
    id: string;
    value: string | number;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    type: HTMLInputElement['type'];
    className?: string;
    placeholder?: string;
    autoFocus?: boolean;
}>;

export const Input: FC<Props> = ({id, value, onChange, type, className, placeholder, autoFocus, children}) => {
    return (
        <div className={clsx(styles.input, className)}>
            {children && <label htmlFor={id}>{children}</label>}
            <input id={id} type={type} value={value} onChange={onChange} placeholder={placeholder} autoFocus={autoFocus}/>
        </div>
    );
}