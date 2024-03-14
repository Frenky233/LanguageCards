import { FC } from 'react';
import styles from './styles.module.scss';
import { Button } from '../button/component';
import PlusCircleIcon from '@public/plusCircleIcon.svg'

type Props = {
    onClick: () => void;
}

export const AddNewCategoryButtonComponent: FC<Props> = ({onClick}) => {
    return (
        <>
            <Button onClick={onClick} variant='Primary' className={styles.addNewButton}><PlusCircleIcon /></Button>
        </>
    );
}