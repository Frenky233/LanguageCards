'use client'

import { FC } from 'react';
import styles from './styles.module.scss';
import { SidebarItem } from '@/components/server/sidebarItem/components';
import clsx from 'clsx';
import { useToggleCategory } from './useToggleCategory';
import { Button } from '../button/component';

type Props ={
    categories: Record<string, boolean>;
    className?: string;
}

export const SidebarListComponent: FC<Props> = ({categories, className}) => {
    const {form, isAllToggled, toggleLocalCategory, toggleLocalAllCategory, onSubmit} = useToggleCategory(categories);

    return (
        <div>
            <ul className={clsx(styles.sidebarList, className)}>
                <li key={0} className={styles.sidebarListAll}>
                    <SidebarItem onChange={toggleLocalAllCategory} title={'All'} checked={isAllToggled}/>
                </li>
                {Object.entries(form).map(([category, checked], index) => 
                    <li key={index}>
                        <SidebarItem disabled={isAllToggled} onChange={toggleLocalCategory} title={category} checked={checked}/>
                    </li>
                )}
            </ul>
            <Button className={styles.button} onClick={onSubmit} variant='Push'>Save</Button>
        </div>
    );
}