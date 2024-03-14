import { FC } from 'react';
import styles from './styles.module.scss';
import { Checkbox } from '../checkbox/components';
import clsx from 'clsx';

type Props = {
    options: Record<string, boolean>;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}

export const Option: FC<Props> = ({options, onChange, className}) => {
    return (
        <ul className={clsx(styles.option, className)}>
            {Object.entries(options).map(([category, checked], index) => {
                return(
                    <li key={index}>
                        <Checkbox onChange={onChange} value={category} checked={checked}>{category}</Checkbox>
                    </li>
                )
            })}
        </ul>
    )
}