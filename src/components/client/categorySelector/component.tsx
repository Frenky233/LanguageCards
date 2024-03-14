import { FC } from 'react';
import styles from './styles.module.scss';
import { SelectContainer } from '../select/container';
import { AddNewCategoryButtonContainer } from '../addNewCategoryButton/container';

type Props = {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    categories: Record<string, boolean>;
    title: string;
}

export const CategorySelectorComponent: FC<Props> = ({onChange, categories, title}) => {
    return (
        <div className={styles.categorySelector}>
            <SelectContainer className={styles.categorySelectorSelect} onChange={onChange} options={categories} title={title}/>
            <AddNewCategoryButtonContainer />
        </div>
    );
}