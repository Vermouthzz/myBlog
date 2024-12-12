import { useState } from "react";

interface Props {
  selectClick: Function;
}

export function SelectDate({ selectClick }: Props) {
  const [select_year, setSelectyear] = useState(-1);
  return (
    <div className="shadow-sm h-[160px]">
      <ul className="py-[10px]">
        <li
          className={`hover:bg-[#f5f6f7] text-center leading-[24px] ${
            select_year == 2024 ? "text-[#3370ff] bg-[#f0f7ff]" : ""
          }`}
        >
          2024
        </li>
      </ul>
      <div className="h-full w-[1px] bg-[]"></div>
    </div>
  );
}