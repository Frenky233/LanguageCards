'use client'

import { FC, PropsWithChildren, memo } from 'react';
import styles from './styles.module.scss';
import CheckIcon from '@public/checkIcon.svg';

type Props = PropsWithChildren<{
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string | number;
    checked?: boolean;
    disabled?: boolean;
}>;

export const Checkbox: FC<Props> = memo(({children, onChange, value, checked, disabled}) => {
    return (
        <label className={styles.checkbox}>
            <input checked={checked} type="checkbox" disabled={disabled} onChange={onChange} className={styles.checkboxInput} value={value}></input>
            <div className={styles.checkboxState}>
                <div className={styles.checkboxTitle}>{children}</div>
                <div className={styles.checkboxControl}>
                    <CheckIcon className={styles.checkboxIcon}/>
                </div>
            </div>
        </label>
    );
})

Checkbox.displayName = 'Checkbox';