import { FC } from 'react';
import styles from './styles.module.scss';
import clsx from 'clsx';
import { SidebarListContainer } from '@/components/client/sidebarList/container';

type Props = {
    className?: string
}

export const Sidebar: FC<Props> = ({className}) => {
    return (
        <div className={clsx(styles.sidebar, className)} id='sidebar'>
            <h2 className={styles.sidebarTitle}>Categories</h2>
            <SidebarListContainer />
        </div>
    );
}