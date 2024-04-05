import { FC } from 'react';
import styles from './styles.module.scss';
import { Button } from '../button/component';
import clsx from 'clsx';

type Props = {
    onOpen: () => void;
    className?: string;
}

export const CategoriesControlButtonComponent: FC<Props> = ({onOpen, className}) => {
    return (
        <Button onClick={onOpen} variant='Push' className={clsx(styles.button, className)}>Categories</Button>
    );
}