import { FC } from 'react';
import styles from './styles.module.scss';
import clsx from 'clsx';
import { CardAnswerFormContainer } from '@/components/client/cardAnswerForm/container';
import { CardTitle } from '@/components/client/cardTitle/component';

type Props = {
    className?: string;
    title: string;
    pronunciation?: string;
}

export const CardComponent: FC<Props> = ({className, title, pronunciation}) => {
    return (
        <div className={clsx(styles.wrapper, className)}>
            <div className={styles.card}>
                <CardTitle className={styles.cardTitle}>{title}</CardTitle>
                {pronunciation && <div className={styles.cardPronunciation}>{`'${pronunciation}'`}</div>}
                <CardAnswerFormContainer className={styles.cardAnswer}/>
            </div>
        </div>
    );
}