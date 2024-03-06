"use client"

import { type FC, type PropsWithChildren, type SVGProps } from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";

type Props = PropsWithChildren<{
    className?: string;
    disabled?: HTMLButtonElement["disabled"];
    onClick?: () => void;
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