'use client'

import { FC, PropsWithChildren } from 'react';
import styles from './styles.module.scss';
import CheckIcon from '@public/checkIcon.svg';

type Props = PropsWithChildren<{
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string | number;
    checked?: boolean
}>;

export const Checkbox: FC<Props> = ({children, onChange, value, checked}) => {
    return (
        <label className={styles.checkbox}>
            <input checked={checked} type="checkbox" onChange={onChange} className={styles.checkboxInput} value={value}></input>
            <div className={styles.checkboxState}>
                <div className={styles.checkboxTitle}>{children}</div>
                <div className={styles.checkboxControl}>
                    <CheckIcon className={styles.checkboxIcon}/>
                </div>
            </div>
        </label>
    );
}