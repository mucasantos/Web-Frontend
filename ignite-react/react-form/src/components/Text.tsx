import { clsx } from "clsx";
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from "react";


export interface TextProps {
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  hasChild?: boolean;
}

export function Text({ size = "md", children, hasChild }: TextProps) {

    const Comp = hasChild ? Slot : 'span'
  return (
    <Comp
      className={clsx("text-gray-100 font-sans", {
        "text-xs": size === "sm",
      })}
    >
      {children}
    </Comp>
  );
}
