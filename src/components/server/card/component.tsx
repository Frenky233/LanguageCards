import { FC } from 'react';
import styles from './styles.module.scss';
import clsx from 'clsx';
import { CardAnswerFormContainer } from '@/components/client/cardAnswerForm/container';
import { CardTitle } from '@/components/client/cardTitle/component';

type Props = {
    className?: string;
    title: string;
    translations?: string[]; 
    pronunciation?: string;
    getNextCard?: () => void;
    submitAnswerToDB?: (isCorrect: boolean) => void;
}

export const CardComponent: FC<Props> = ({className, title, pronunciation, translations, getNextCard, submitAnswerToDB}) => {
    return (
        <div className={clsx(styles.card, className)} id='card'>
            <CardTitle className={styles.cardTitle}>{title}</CardTitle>
            {pronunciation && <div className={styles.cardPronunciation}>{`'${pronunciation}'`}</div>}
            <CardAnswerFormContainer submitAnswerToDB={submitAnswerToDB} getNextCard={getNextCard} answer={translations} className={styles.cardAnswer}/>
        </div>
    );
}