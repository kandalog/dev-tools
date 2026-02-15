import React from "react";

interface BaseTitleProps {
  children: React.ReactNode;
}
export const BaseTitle = ({ children }: BaseTitleProps) => {
  return <h2 className="text-2xl font-bold text-white mb-8">{children}</h2>;
};
