'use client'

import { FC, useRef, useState } from 'react';
import styles from './styles.module.scss';
import clsx from 'clsx';
import { SelectComponent } from './component';
import { Option } from '../option/component';

type Props = {
    options: Record<string, boolean>;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    title: string;
    className?: string;
}

export const SelectContainer: FC<Props> = ({options, onChange, title, className}) => {
    const [showOptions, setShowOptions] = useState(false);
    const chevronRef = useRef<HTMLDivElement>(null);
    
    const onOpen = () =>{
        setShowOptions(!showOptions);

        if(!chevronRef.current) return;
        
        chevronRef.current.dataset.open === 'true' ? chevronRef.current.dataset.open = 'false' : chevronRef.current.dataset.open = 'true'
    }

    return (
        <div className={clsx(styles.select, className)}>
            <SelectComponent chevronRef={chevronRef} onClick={onOpen} title={title} className={styles.selectButton}/>
            {showOptions && <Option options={options} onChange={onChange} className={styles.selectList}/>}
        </div>
    );
}