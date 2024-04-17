'use client'

import { FC, PropsWithChildren, useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import clsx from 'clsx';

type Props = PropsWithChildren<{
    className?: string;
}>;

export const CardTitle: FC<Props> = ({children, className}) => {
    const element = useRef<HTMLHeadingElement>(null);
    const parent = useRef<HTMLDivElement>(null)
    
    useEffect(() => {
        if(!element.current || !parent.current) return;

        const fitText = (element: HTMLHeadingElement, parent: HTMLDivElement) => {
            const maxHeight = Math.floor(parent.clientWidth / (element.childNodes[0].nodeValue!.length * 1.5));
            const maxWidth = Math.floor(parent.clientWidth / element.childNodes[0].nodeValue!.length);
          
            const fontSize = maxWidth > parent.clientHeight ? maxHeight : maxWidth;
          
            element.style.fontSize = `${fontSize}px`;
        }

        fitText(element.current, parent.current);
    }, [children, window.innerWidth])
    
    return (
        <div ref={parent} className={clsx(styles.wrapper, className)}>
            <h3 ref={element}>{children}</h3>
        </div>
    );
}