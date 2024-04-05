import { FC } from 'react';
import styles from './styles.module.scss';
import { Checkbox } from '@/components/client/checkbox/components';
import clsx from 'clsx';

type Props = {
    title: string;
    checked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}

export const SidebarItem: FC<Props> = ({title, checked, onChange, className}) => {
    return (
        <div className={clsx(styles.sidebarItem, className)}>
            <Checkbox onChange={onChange} checked={checked} value={title}>{title}</Checkbox>
        </div>
    );
}