import { FC } from 'react';
import styles from './styles.module.scss';
import LogoIcon from '@public/logoIcon.svg'

export const Logo: FC = () => {
    return (
        <div className={styles.logo}>
            <LogoIcon />
        </div>
    );
}