import { FC, RefObject } from 'react';
import styles from './styles.module.scss';
import { CategoriesControlItem } from '../categoriesControlItem/component';

type Props = {
    countedCategories: Record<string, number>;
    totalAmount: number;
    onDelete: (category: string) => void;
    onUpdate: (category: string) => void;
    forwardRef: RefObject<HTMLDivElement>;
    className?: string;
}

export const CategoriesControlComponent: FC<Props> = ({countedCategories, totalAmount, onDelete, onUpdate, forwardRef, className}) => {    
    return (
        <div className={className} ref={forwardRef}>
            <h3 className={styles.categoriesControlTitle}>Categories</h3>
            <ul className={styles.categoriesControlList}>
                {Object.keys(countedCategories).map((category, index) => {
                    return (
                        <li key={index} className={styles.categoriesControlListItem}>
                            <CategoriesControlItem 
                                category={category} 
                                count={countedCategories[category]}
                                onDelete={onDelete}
                                onUpdate={onUpdate}
                            />
                        </li>
                    );
                })}
            </ul>
            <div className={styles.categoriesControlTotal}>
                Total cards amount: {totalAmount}
            </div>
        </div>
    );
}