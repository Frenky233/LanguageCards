import { FC, RefObject } from 'react';
import styles from './styles.module.scss';
import { Button } from '../button/component';
import ChevronIcon from '@public/chevronIcon.svg';

type Props = {
    title: string;
    onClick: () => void;
    chevronRef: RefObject<HTMLDivElement>;
    className?: string;
}


export const SelectComponent: FC<Props> = ({title, onClick, chevronRef, className}) => {
    return (
        <div className={styles.selectControl}>
            <Button className={styles.selectButton} onClick={onClick}>
                {title}
                <div ref={chevronRef} className={styles.chevron}>
                    <ChevronIcon />
                </div>
            </Button>
        </div>
    );
}