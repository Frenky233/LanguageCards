import { FC } from 'react';
import styles from './styles.module.scss';
import { Button } from '../button/component';
import EditIcon from '@public/editIcon.svg';

type Props = {
    onClick: () => void;
}

export const CardsTableEditComponent: FC<Props> = ({onClick}) => {
    return (
        <Button className={styles.edit} onClick={onClick}><EditIcon /></Button>
    );
}