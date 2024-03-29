import { FC } from 'react';
import styles from './styles.module.scss';
import clsx from 'clsx';
import { CardAnswerFormContainer } from '@/components/client/cardAnswerForm/container';


export const CardLoading: FC = ({}) => {
    return (
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.card, styles.cardLoading)}>
                <div className={clsx(styles.cardTitle, styles.loadingTitle)}>
                    <div className={styles.loading}></div>
                </div>
                <div className={clsx(styles.cardPronunciation, styles.loading)}>'loading'</div>
                <CardAnswerFormContainer className={styles.cardAnswer}/>
            </div>
        </div>
    );
}