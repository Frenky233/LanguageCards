import { FC } from 'react';
import styles from './styles.module.scss';
import { NavItem } from '../navItem/component';

export const Navigation: FC = () => {
    return (
        <div className={styles.navigation}>
            <NavItem href='/' className={styles.navigationButton}>Learn</NavItem>
            <NavItem href='./cards' className={styles.navigationButton}>Cards</NavItem>
        </div>
    );
}