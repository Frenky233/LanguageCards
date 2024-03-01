import { FC, PropsWithChildren } from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';
import clsx from "clsx";

type Props = PropsWithChildren<{
    href: string;
    className: string;
}>

export const NavItem: FC<Props> = ({href, className, children}) => {
    return (
        <Link href={href} className={clsx(className, styles.navItem)}>{children}</Link>
    );
}