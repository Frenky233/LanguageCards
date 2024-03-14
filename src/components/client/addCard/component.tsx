import { FC } from 'react';
import styles from './styles.module.scss';
import { Button } from '../button/component';

type Props = {
    onOpen: () => void;
    className?: string;
}

export const AddCardComponent: FC<Props> = ({onOpen, className}) => {
    return (
        <Button className={className} onClick={onOpen} variant='Push'>Add Card</Button>
    );
}