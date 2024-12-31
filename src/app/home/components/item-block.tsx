import React from "react";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

export function ItemBlock({ children, className }: Props) {
  return (
    <div className="flex items-start">
      <span>September 12, 2024</span>
      <div className="pl-8 ml-8 pb-10 relative border-[red] border-l">
        <div className="rounded-full w-3 h-3 border-[2px] border-[#3077ff] bg-white absolute -left-1.5 -top-1.5"></div>
        {children}
      </div>
    </div>
  );
}
