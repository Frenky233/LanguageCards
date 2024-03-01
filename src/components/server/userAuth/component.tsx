import { FC } from 'react';
import styles from './styles.module.scss';
import { Button } from '@/components/client/button/component';
import clsx from 'clsx';

type Props ={
    className?: string;
}

export const UserAuth: FC<Props> = ({className}) => {
    return (
        <div className={clsx(styles.userAuth, className)}>
            <Button variant={'Primary'}>Log In</Button>
        </div>
    );
}