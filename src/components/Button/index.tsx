import { ButtonHTMLAttributes, ComponentType, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ComponentType<{ className?: string }>;
  text?: ReactNode;
}

export default function Button({
  onClick,
  icon: Icon,
  text,
  ...rest
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center gap-1 rounded-md border border-gray-200 bg-white px-2 py-1.5 text-sm"
      data-testid="test-button"
      {...rest}
    >
      <Icon className="h-5 w-5 font-medium text-gray" aria-hidden="true" />
      {text && <span className="text-gray">{text}</span>}
    </button>
  );
}
