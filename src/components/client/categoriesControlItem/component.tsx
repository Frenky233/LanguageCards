import { FC } from 'react';
import styles from './styles.module.scss';
import PlusCircleIcon from '@public/plusCircleIcon.svg';
import EditIcon from '@public/editIcon.svg';
import clsx from 'clsx';
import { Button } from '../button/component';

type Props = {
    category: string;
    count: number;
    onDelete: (category: string) => void;
    onUpdate: (category: string) => void;
    className?: string;
}

export const CategoriesControlItem: FC<Props> = ({category, count, onDelete, onUpdate, className}) => {
    return (
        <div className={clsx(styles.item, className)}>
            <div className={styles.itemTitle}>
                {category}: {count}
            </div>
            <div className={styles.itemControl}>
                <Button className={styles.itemEdit} onClick={() => onUpdate(category)}><EditIcon /></Button>
                <Button className={styles.itemDelete} onClick={() => onDelete(category)}><PlusCircleIcon /></Button>
            </div>
        </div>
    );
}