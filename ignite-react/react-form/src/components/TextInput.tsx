import { clsx } from "clsx";
import { InputHTMLAttributes } from "react";

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function TextInput(props: TextInputProps) {
  return (
    <div
      className={clsx(
        "py-4 px-3 w-full rounded bg-gray-800 text-gray-100 text-xs outline-none  placeholder:text-gray-400"
      )}
    >
      <input className={clsx("")} {...props}></input>
    </div>
  );
}
