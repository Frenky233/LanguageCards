import { FC } from 'react';
import styles from './styles.module.scss';
import clsx from 'clsx';
import { Card } from '@/db/db.modal';

type Props = {
    cards: Card[]
    className?: string;
}

export const CardsTableComponent: FC<Props> = ({cards, className}) => {
    return (
        <div className={clsx(styles.cardsTable, className)}>
            Server
        </div>
    );
}