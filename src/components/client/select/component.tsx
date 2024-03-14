import { FC, useMemo } from 'react';
import styles from './styles.module.scss';
import { Button } from '../button/component';


type Props = {
    title: string;
    onClick: () => void;
    className?: string;
}


export const SelectComponent: FC<Props> = ({title, onClick, className}) => {
    return (
        <div className={styles.selectControl}>
            <Button className={styles.selectButton} onClick={onClick}>{title}</Button>
        </div>
    );
}