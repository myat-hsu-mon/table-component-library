import { InputHTMLAttributes } from "react";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  checked?: boolean;
  onChange?: () => void;
}

export default function Checkbox({
  checked = false,
  onChange = () => {},
  ...rest
}: CheckboxProps) {
  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="h-4 w-4 cursor-pointer rounded border-gray-300 text-blue outline-none ring-0 focus:ring-0"
      data-testid="test-checkbox"
      {...rest}
    />
  );
}
