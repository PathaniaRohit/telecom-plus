import type { ReactNode } from "react";

type EyebrowProps = {
  children: ReactNode;
  className?: string;
};

export function Eyebrow({ children, className = "" }: EyebrowProps) {
  return (
    <p className={`flex items-center gap-2 text-small ${className}`}>
      <span aria-hidden="true" className="size-2 rounded-full bg-current" />
      {children}
    </p>
  );
}
