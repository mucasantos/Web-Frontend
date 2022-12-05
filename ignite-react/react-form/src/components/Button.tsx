import { clsx } from "clsx";
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from "react";


export interface ButtonProps {
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  hasChild?: boolean;
}

export function Button({ size = "md", children, hasChild }: ButtonProps) {

    const Comp = hasChild ? Slot : 'button'
  return (
    <Comp
      className={clsx("py-4 px-3 bg-cyan-500 rounded font-semibold text-black text-sm w-full transition-colors ring-white focus:ring-2 hover:bg-cyan-300 ")}
    >
      {children}
    </Comp>
  );
}
