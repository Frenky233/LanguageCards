'use client'

import { FC, useState } from 'react';
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
    
    const onOpen = () =>{
        setShowOptions(!showOptions);
    }

    return (
        <div className={clsx(styles.select, className)}>
            <SelectComponent onClick={onOpen} title={title} className={styles.selectButton}/>
            {showOptions && <Option options={options} onChange={onChange} className={styles.selectList}/>}
        </div>
    );
}