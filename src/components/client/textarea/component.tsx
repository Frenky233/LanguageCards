'use client'

import React, { FC, LegacyRef, PropsWithChildren, RefObject } from 'react';
import styles from './styles.module.scss';
import clsx from 'clsx';

type Props = PropsWithChildren<{
    id: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    className?: string;
    placeholder?: string;
    forwardRef?: RefObject<HTMLTextAreaElement>;
    autoFocus?: boolean;
}>

export const Textarea: FC<Props> = ({id, value, onChange, className, placeholder, children, forwardRef, autoFocus}) => {
    return (
        <div className={clsx(styles.wrapper, className)}>
            {children && <label htmlFor={id}>{children}</label>}
            <textarea autoFocus={autoFocus} ref={forwardRef} className={styles.textarea} id={id} value={value} onChange={onChange} placeholder={placeholder}/>
        </div>
    );
}