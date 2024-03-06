import { FC } from 'react';
import styles from './styles.module.scss';
import { Logo } from '../logo/component';
import { Navigation } from '../navigation/component';
import { UserAuthContainer } from '@/components/client/userAuth/container';

export const Header: FC = () => {
    return (
        <header className={styles.header}>
            <Logo />
            <div className={styles.headerInner}>
                <Navigation />
                <UserAuthContainer />
            </div>
        </header>
    );
}