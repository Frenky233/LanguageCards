import { FC, MouseEvent } from 'react';
import styles from './styles.module.scss';
import { Card } from '@/db/db.modal';
import { CardsTableDeleteContainer } from '@/components/client/cardsTableDelete/container';
import { CardsTableEditContainer } from '@/components/client/cardsTableEdit/container';

type Props = {
    card: Card
}

export const CardsTableItem: FC<Props> = ({card}) => {
    const onClick = (event: MouseEvent<HTMLDivElement>) =>{
        const element = event.target as HTMLElement;

        if(element.closest('button')) return;
        const tableItem = element.closest('#item') as HTMLDivElement;
        if(!tableItem) return;
        
        tableItem.dataset.open = tableItem.dataset.open === 'true' ? 'false' : 'true';
    }
    
    return (
        <div className={styles.cardsTableItem} onClick={onClick} id='item'>
            <div className={styles.cardsTableItemHeader}>
                <div>{card.word}</div>
                <div>{card.translations.reduce((acc, item, index) =>
                    acc += `${index !== 0 ? ', ' : ''}` + `'${item}'`,
                    ''
                )}</div>
                <div>{`'${card.pronunciation}'`}</div>
                <div>{card.categories.reduce((acc, item, index) =>
                    acc += `${index !== 0 ? ', ' : ''}` + item,
                    ''
                )}</div>
                <div className={styles.cardsTableItemHeaderControl}>
                    <CardsTableEditContainer card={card}/>
                    <CardsTableDeleteContainer id={card.id!}/>
                </div>
            </div>
            <div className={styles.cardsTableItemBody}>
                <div>
                    <span>Word: </span>
                    <span>&apos;{card.word}&apos;</span>
                </div>
                <div>
                    <span>Translations: </span>
                    <span>
                        {card.translations.reduce((acc, item, index) =>
                            acc += `${index !== 0 ? ', ' : ''}` + `'${item}'`,
                            ''
                        )}
                    </span>
                </div>
                <div>
                    <span>Pronunciation: </span>
                    <span>&apos;{card.pronunciation}&apos;</span>
                </div>
                <div>
                    <span>Categories: </span>
                    <span>
                        {card.categories.reduce((acc, item, index) =>
                            acc += `${index !== 0 ? ', ' : ''}` + item,
                            ''
                        )}
                    </span>
                </div>
                <div>
                    <span>Correct: </span>
                    <span>{card.correct || 0}</span>
                </div>
                <div>
                    <span>Wrong: </span>
                    <span>{card.wrong || 0}</span>
                </div>
                <div>
                    <span>Accuracy: </span>
                    <span>{card.correct + card.wrong === 0 ? 'N/A' : Math.floor(card.correct / (card.correct + card.wrong) * 100) + '%'}</span>
                </div>
            </div>
        </div>
    );
}