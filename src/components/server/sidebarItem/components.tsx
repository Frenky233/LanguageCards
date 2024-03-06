import { FC, PropsWithChildren } from 'react';
import styles from './styles.module.scss';
import { Checkbox } from '@/components/client/checkbox/components';

type Props = PropsWithChildren<{

}>

export const SidebarItem: FC<Props> = ({children}) => {
    return (
        <div className={styles.sidebarItem}>
            <Checkbox>{children}</Checkbox>
        </div>
    );
}