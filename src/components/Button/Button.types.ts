import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

interface ButtonProps extends DetailedHTMLProps<
ButtonHTMLAttributes<HTMLButtonElement>,
HTMLButtonElement
> {
  children: ReactNode;
  href?: string;
  target?: "_blank";
  icon?: ReactNode;
}

export type { ButtonProps };
