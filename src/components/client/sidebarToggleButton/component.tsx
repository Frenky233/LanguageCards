import { FC, RefObject } from 'react';
import styles from './styles.module.scss';
import { Button } from '../button/component';
import MenuIcon from '@public/menuIcon.svg'

type Props = {
    onClick: () => void;
}

export const SidebarToggleComponent: FC<Props> = ({onClick}) => {
    return (
        <div className={styles.sidebarToggle}>
            <Button className={styles.sidebarToggleButton} onClick={onClick}><MenuIcon /></Button>
        </div>
    );
}