'use client'

import { db } from '@/db/db.modal';
import { deleteCategory, getAllCategories, updateCategory } from '@/redux/ui/categories';
import { useLiveQuery } from 'dexie-react-hooks';
import { FC, useRef, useState } from 'react';
import styles from './styles.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { CategoriesControlComponent } from './component';
import { AddNewCategoryContainer } from '../addNewCategory/container';

type Props = {
    className?: string;
}

export const CategoriesControlContainer: FC<Props> = ({className}) => {
    const dispatch = useDispatch();
    const [showEditWindow, setShowEditWindow] = useState(false);
    const [currentEditable, setCurrentEditable] = useState('');
    const forwardRef = useRef<HTMLDivElement>(null);
    const categories = useSelector(getAllCategories);
    const countedCategories = useLiveQuery(async() =>{
        const countedCategories: Record<string, number> = {};

        await Promise.all(categories.map(async(category) => {
            const count = await db.cards.where('categories').equals(category).count();
            countedCategories[category] = count;
        }))

        return countedCategories
    }, [JSON.stringify(categories)]);

    const totalAmount = useLiveQuery(async() =>{
        return await db.cards.count();
    }, []);

    const onDelete = (category: string) =>{
        dispatch(deleteCategory(category));
    }

    const onUpdate = (category: string) =>{
        forwardRef.current!.style.pointerEvents = 'none';
        setCurrentEditable(category);
        setShowEditWindow(true);
    }

    const onClose = () =>{
        forwardRef.current!.removeAttribute('style');
        setShowEditWindow(false);
    }

    const onSubmit = (category: string) =>{
        dispatch(updateCategory([currentEditable, category]));
        setShowEditWindow(false);
    }

    return (
        <>
            <CategoriesControlComponent 
                countedCategories={countedCategories || {}} 
                totalAmount={totalAmount || 0}
                onDelete={onDelete}
                onUpdate={onUpdate}
                forwardRef={forwardRef} 
                className={className}
            />
            {showEditWindow && <AddNewCategoryContainer 
                onClose={onClose} 
                onSubmit={onSubmit} 
                initialState={currentEditable}
                className={styles.categoriesControlPopup}
            />}
        </>
    );
}