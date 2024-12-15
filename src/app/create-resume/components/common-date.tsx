import { SelectDate } from "./select-date";

interface Props {
  classname?: string;
}

export function CommonDate({ classname }: Props) {
  const fn = () => {};
  return (
    <div>
      <label className={`text-[14px] require ${classname}`}>起止时间</label>
      <div className="flex">
        <div className="date-select flex-1 h-[36px] rounded-tl-[5px] rounded-br-[5px] relative">
          <SelectDate selectClick={fn} classname=""></SelectDate>
        </div>
        <div className="date-select flex-1 h-[36px] rounded-tr-[5px] rounded-br-[5px]"></div>
      </div>
    </div>
  );
}
