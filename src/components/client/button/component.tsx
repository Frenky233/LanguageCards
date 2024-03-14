"use client"

import { MouseEventHandler, type FC, type PropsWithChildren} from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";

type Props = PropsWithChildren<{
    className?: string;
    disabled?: HTMLButtonElement["disabled"];
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    type?: HTMLButtonElement["type"];
    variant?: 'Primary' | 'Secondary' | 'Push';
}>;

export const Button: FC<Props> = ({
  children,
  className,
  disabled,
  onClick,
  type = "button",
  variant,
}) => {
  return (
    <button
      className={clsx(styles.button, className, styles[`variant${variant}`])}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};