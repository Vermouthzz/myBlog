import React from "react";

interface Props {
  classname?: string;
  id?: string;
  children?: React.ReactNode;
  label: string;
  placeholder?: string;
}

export function InputItem({ classname, id, label, placeholder }: Props) {
  return (
    <div className={`${classname} mb-[20px] flex flex-col`}>
      <label htmlFor={id} className="text-[14px] mb-[10px] require">
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        id={id}
        className="border border-[#BBBFC3] rounded-[5px] p-[6px] text-[13px]"
      />
    </div>
  );
}
