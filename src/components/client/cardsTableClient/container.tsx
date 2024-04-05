'use client'

import { FC, useRef, useState } from 'react';
import { CardsTableClientComponent } from './component';
import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '@/db/db.modal';
import { useSearchBarInput } from './useSearchBarInput';
import { useDebounce } from 'use-debounce';

export const CardsTableClientContainer: FC = ({}) => {
    const [sortBy, setSortBy] = useState({id: '', reverse: false})
    const {value, setSearchQuery} = useSearchBarInput();
    const [query] = useDebounce(value, 200);
    
    const cards = useLiveQuery(async() => {
        if(sortBy.id && query){
            const cards = await db.cards
                .where('word')
                .startsWithIgnoreCase(query)
                .or('translations')
                .startsWithIgnoreCase(query)
                .distinct()
                .sortBy(sortBy.id);
                
            return sortBy.reverse ? cards.reverse() : cards;
        }
        
        if(sortBy.id && !query) {
            const cards = await db.cards.orderBy(sortBy.id).distinct().toArray();

            return sortBy.reverse ? cards.reverse() : cards;
        };

        if(!query && !sortBy.id) return await db.cards.toArray();

        return await db.cards
            .where('word')
            .startsWithIgnoreCase(query)
            .or('translations')
            .startsWithIgnoreCase(query)
            .distinct()
            .toArray();
    }, [query, sortBy]);

    const onHeaderClick = (sortByNew: 'word' | 'translations' | 'pronunciation' | 'categories') =>{
        if(sortByNew === sortBy.id){
            document.getElementById(sortByNew)!.dataset.sorted = sortBy.reverse ? 'asc' : 'desc';
            setSortBy({id: sortByNew, reverse: !sortBy.reverse});
            return;
        }
        
        sortBy.id && document.getElementById(sortBy.id)!.removeAttribute('data-sorted');
        setSortBy({id: sortByNew, reverse: false});
        document.getElementById(sortByNew)!.dataset.sorted = 'asc';
    }

    return (
        <CardsTableClientComponent cards={cards || []} searchValue={value} setSearchQuery={setSearchQuery} onHeaderClick={onHeaderClick}/>
    );
}