import { clsx } from "clsx";
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from "react";


export interface HeadingProps {
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  hasChild?: boolean;
}

export function Heading({ size = "md", children, hasChild }: HeadingProps) {

    const Comp = hasChild ? Slot : 'h2'
  return (
    <Comp
      className={clsx("text-gray-100 font-sans font-bold", {
        "text-lg": size === "sm",
        "text-xl": size === "md",
        "text-2xl": size === "lg",
      })}
    >
      {children}
    </Comp>
  );
}
