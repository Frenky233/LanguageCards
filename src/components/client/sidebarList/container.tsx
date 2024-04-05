'use client'

import { getCategoriesState, toggleCategory } from '@/redux/ui/categories';
import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SidebarListComponent } from './component';

type Props = {
    className?: string;
}

export const SidebarListContainer: FC<Props> = ({className}) => {
    const [domLoaded, setDomLoaded] = useState(false);
    const categories = useSelector(getCategoriesState);
    const dispatch = useDispatch();
    
    useEffect(() => {
        setDomLoaded(true);
        dispatch(toggleCategory(categories));
    },[])

    return domLoaded && (<SidebarListComponent categories={{...categories}} className={className} />);
}