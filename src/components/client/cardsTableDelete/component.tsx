import { FC } from 'react';
import styles from './styles.module.scss';
import { Button } from '../button/component';
import PlusCircleIcon from '@public/plusCircleIcon.svg'
import clsx from 'clsx';

type Props = {
    onClick: () => void;
    className?: string;
}

export const CardsTableDeleteComponent: FC<Props> = ({onClick, className}) => {
    return (
        <Button onClick={onClick} className={clsx(styles.delete, className)}><PlusCircleIcon /></Button>
    );
}