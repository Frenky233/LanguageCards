import { FC } from 'react';
import styles from './styles.module.scss';
import clsx from 'clsx';
import { Button } from '@/components/client/button/component';
import { SidebarItem } from '../sidebarItem/components';

type Props = {
    className?: string
}

export const SideBar: FC<Props> = ({className}) => {
    return (
        <div className={clsx(styles.sidebar, className)}>
            <h2 className={styles.sidebarTitle}>Categories</h2>
            <ul className={styles.sidebarCategories}>
                <li><SidebarItem>All</SidebarItem></li>
            </ul>
            <Button variant='Push'>Save</Button>
        </div>
    );
}