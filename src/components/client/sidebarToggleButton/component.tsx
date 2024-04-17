import { FC, RefObject, memo } from 'react';
import styles from './styles.module.scss';
import { Button } from '../button/component';
import MenuIcon from '@public/menuIcon.svg'

type Props = {
    onClick: () => void;
    buttonRef: RefObject<HTMLDivElement>
}

export const SidebarToggleComponent: FC<Props> = memo(({onClick, buttonRef}) => {
    return (
        <div className={styles.sidebarToggle} ref={buttonRef}>
            <Button className={styles.sidebarToggleButton} onClick={onClick}><MenuIcon /></Button>
        </div>
    );
})

SidebarToggleComponent.displayName = 'SidebarToggleComponent';