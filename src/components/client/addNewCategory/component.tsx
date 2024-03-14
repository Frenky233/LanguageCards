import { FC } from 'react';
import styles from './styles.module.scss';
import clsx from 'clsx';
import { Input } from '../input/component';
import { Button } from '../button/component';

type Props = {
    onClose: () => void;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: () => void;
    value: string;
    className?: string;
}

export const AddNewCategoryComponent: FC<Props> = ({onClose, onChange, onSubmit, value, className}) => {
    return (
        <div className={clsx(styles.addNewCategory, className)}>
            <Input id='newCategory' onChange={onChange} type='text' value={value} autoFocus={true}>Category</Input>
            <div className={styles.addNewCategoryControl}>
                <Button variant='Secondary' onClick={onSubmit}>Save</Button>
                <Button className={styles.addNewCategoryCancel} variant='Primary' onClick={onClose}>Cancel</Button>
            </div>
        </div>
    );
}