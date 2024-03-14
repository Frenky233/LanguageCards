'use client'

import { FC } from 'react';
import styles from './styles.module.scss';
import { Input } from '../input/component';
import { useSearchBarInput } from './useSearchBarInput';
import { useDebounce } from 'use-debounce';
import clsx from 'clsx';

type Props = {
    className?: string;
}

export const CardsSearchBar: FC<Props> = ({className}) => {
    const {value, setSearchQuery} = useSearchBarInput();
    useDebounce(value, 200);

    return (
        <form className={clsx(styles.searchBar, className)}>
            <Input className={styles.searchBarInput} id='searchQuery' value={value} type='text' onChange={setSearchQuery} placeholder='Search...'/>
        </form>
    );
}