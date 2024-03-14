import { FC, PropsWithChildren } from 'react';
import styles from './styles.module.scss';
import clsx from 'clsx';

type Props = PropsWithChildren<{
    title: string;
    className?: string;
}>

export const AddCardFormField: FC<Props> = ({title, className, children}) => {
    return (
        <div className={clsx(styles.formField, className)}>
            <h4>{title}</h4>
            <div className={styles.formFieldInputs}>
                {children}
            </div>
        </div>
    );
}