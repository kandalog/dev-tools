import { ReactNode } from "react";

type FieldItemProps = {
  label: string;
  children: ReactNode;
};

export const FieldItem = ({ label, children }: FieldItemProps) => {
  return (
    <div>
      <span className="text-sm font-medium text-gray-400">{label}</span>
      {children}
    </div>
  );
};
