import { FC } from 'react';
import styles from './styles.module.scss';
import { Logo } from '../logo/component';
import { Navigation } from '../navigation/component';
import { UserAuth } from '../userAuth/component';

export const Header: FC = () => {
    return (
        <header className={styles.header}>
            <Logo />
            <Navigation />
            <UserAuth className={styles.headerAuth} />
        </header>
    );
}