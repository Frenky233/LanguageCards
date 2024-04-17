'use client'

import { FC, RefObject, useMemo } from 'react';
import styles from './styles.module.scss';
import { Input } from '../input/component';
import clsx from 'clsx';
import SearchIcon from '@public/searchIcon.svg'

type Props = {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}

export const CardsSearchBar: FC<Props> = ({value, onChange, className}) => {
    return (
        <form className={clsx(styles.searchBar, className)}>
            <label className={styles.searchBarWrapper}>
                <Input className={styles.searchBarInput} id='searchQuery' value={value} type='text' onChange={onChange} placeholder='Word or Translation...'/>
                {useMemo(() => 
                    <div className={styles.searchBarLogo}>
                        <SearchIcon />
                    </div>
                , [])}
            </label>
        </form>
    );
}