import { FC, RefObject } from 'react';
import styles from './styles.module.scss';
import { Card } from '@/db/db.modal';
import { CardsTableItem } from '@/components/server/cardsTableItem/component';
import { Inter } from 'next/font/google';
import clsx from 'clsx';
import { CardsSearchBar } from '../cardsSearchBar/component';
import { AddCardContainer } from '../addCard/container';
import { CategoriesControlButtonContainer } from '../categoriesControlButton/container';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
  })

type Props = {
    cards: Card[];
    searchValue: string;
    setSearchQuery: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onHeaderClick: (sortBy: 'word' | 'translations' | 'pronunciation' | 'categories') => void;
}

export const CardsTableClientComponent: FC<Props> = ({cards, searchValue, setSearchQuery, onHeaderClick}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.cardsControl}>
                <CardsSearchBar value={searchValue} onChange={setSearchQuery} className={styles.cardsControlSearchBar}/>
                <CategoriesControlButtonContainer className={styles.cardsControlButton}/>
                <AddCardContainer className={styles.cardsControlButton}/>
            </div>
            <div className={clsx(styles.cardsTable, inter)}>
                <div className={styles.cardsTableHeader}>
                    <div><span id='word' onClick={() => onHeaderClick('word')}>Word</span></div>
                    <div><span id='translations' onClick={() => onHeaderClick('translations')}>Translation</span></div>
                    <div><span id='pronunciation' onClick={() => onHeaderClick('pronunciation')}>Pronunciation</span></div>
                    <div><span id='categories' onClick={() => onHeaderClick('categories')}>Categories</span></div>
                    <div></div>
                </div>
                {cards?.map((card, index) => 
                    <CardsTableItem card={card} key={index}/>
                )}     
            </div>
        </div>
    );
}