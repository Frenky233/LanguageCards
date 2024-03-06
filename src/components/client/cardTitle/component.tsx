'use client'

import { FC, PropsWithChildren, useEffect } from 'react';
import styles from './styles.module.scss';
import clsx from 'clsx';
import { useFitText } from './useFitText';

type Props = PropsWithChildren<{
    className?: string;
}>;

export const CardTitle: FC<Props> = ({children, className}) => {
    useEffect(() => {
        const element = document.getElementById('cardTitle')!;
        const parent = document.getElementById('cardTitleWrapper')!;

        useFitText(element, parent, 1)
    }, [])
    
    return (
        <div id='cardTitleWrapper' className={clsx(styles.wrapper, className)}>
            <h3 id='cardTitle'>{children}</h3>
        </div>
    );
}