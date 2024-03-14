'use client'

import { FC, useCallback, useState } from 'react';
import { AddNewCategoryComponent } from './component';

type Props = {
    onClose: () => void;
    className?: string;
}

export const AddNewCategoryContainer: FC<Props> = ({onClose, className}) => {
    const [category, setCategory] = useState('');

    const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setCategory(event.target.value)
    },[])

    const onSubmit = () => {
        const categories = localStorage.getItem('categories');
        let categoriesArray: string[] = []

        if(categories){
            categoriesArray = JSON.parse(categories);
        }
        
        if(categoriesArray.find(item => item.toLowerCase() === category.toLowerCase())) {
            onClose();
            console.log(category + ' already exists');
            return;
        }

        categoriesArray.push(category);
        localStorage.categories = JSON.stringify(categoriesArray);
        onClose();
    }
    
    return (
        <AddNewCategoryComponent onClose={onClose} onChange={onChange} onSubmit={onSubmit} value={category} className={className}/>
    );
}