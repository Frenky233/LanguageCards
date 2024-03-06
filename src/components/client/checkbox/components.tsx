'use client'

import { FC, PropsWithChildren } from 'react';
import styles from './styles.module.scss';
import CheckIcon from '@public/checkIcon.svg';

type Props = PropsWithChildren<{
    onChange?: () => void;
}>;

export const Checkbox: FC<Props> = ({children, onChange}) => {
    return (
        <label className={styles.checkbox}>
            <input type="checkbox" onChange={onChange} className={styles.checkboxInput}></input>
            <div className={styles.checkboxState}>
                <div className={styles.checkboxTitle}>{children}</div>
                <div className={styles.checkboxControl}>
                    <CheckIcon className={styles.checkboxIcon}/>
                </div>
            </div>
        </label>
    );
}