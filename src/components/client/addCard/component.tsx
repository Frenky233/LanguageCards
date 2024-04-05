import { FC } from 'react';
import styles from './styles.module.scss';
import { Button } from '../button/component';
import clsx from 'clsx';

type Props = {
    onOpen: () => void;
    className?: string;
}

export const AddCardComponent: FC<Props> = ({onOpen, className}) => {
    return (
        <Button className={clsx(styles.addCardButton, className)} onClick={onOpen} variant='Push'>New Card</Button>
    );
}