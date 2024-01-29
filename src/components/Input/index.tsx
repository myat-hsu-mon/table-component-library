import { InputHTMLAttributes, ChangeEvent } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  placeholder,
  name,
  type,
  value,
  onChange = (e) => {},
  ...rest
}: InputProps) {
  return (
    <div className="w-full sm:w-1/3">
      <div className="relative rounded-md">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <MagnifyingGlassIcon
            className="h-5 w-5 font-medium text-gray"
            aria-hidden="true"
            data-testid="magnifying-glass-icon"
          />
        </div>
        <input
          type={type}
          name={name}
          id={name}
          value={value}
          className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-dark shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray focus:ring-0 sm:text-sm sm:leading-6"
          placeholder={placeholder}
          onChange={onChange}
          {...rest}
        />
      </div>
    </div>
  );
}
