'use client'

import { FC, PropsWithChildren, useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import clsx from 'clsx';
import { useFitText } from './useFitText';

type Props = PropsWithChildren<{
    className?: string;
}>;

export const CardTitle: FC<Props> = ({children, className}) => {
    const element = useRef<HTMLHeadingElement>(null);
    const parent = useRef<HTMLDivElement>(null)
    
    useEffect(() => {
        if(!element.current || !parent.current) return;

        useFitText(element.current, parent.current)
    }, [children, window.innerWidth])
    
    return (
        <div ref={parent} className={clsx(styles.wrapper, className)}>
            <h3 ref={element}>{children}</h3>
        </div>
    );
}