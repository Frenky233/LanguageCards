'use client'

import { FC, useCallback, useState } from 'react';
import { AddNewCategoryComponent } from './component';
import { addCategory } from '@/redux/ui/categories';

type Props = {
    onClose: () => void;
    onSubmit: (category: string) => void;
    initialState?: string;
    className?: string;
}

export const AddNewCategoryContainer: FC<Props> = ({onClose, onSubmit, initialState, className}) => {
    const [category, setCategory] = useState(initialState || '');

    const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setCategory(event.target.value)
    },[])
    
    return (
        <AddNewCategoryComponent 
            onClose={onClose} 
            onChange={onChange} 
            onSubmit={onSubmit} 
            value={category} 
            initialState={initialState} 
            className={className}
        />
    );
}