import { CommonDate } from "./common-date";
import { InputItem } from "./input-item";
import { TextareaItem } from "./textarea-item";

export function CommonItem() {
  return (
    <div className="px-[20px] hover:bg-[#F9FBFF] flex-1">
      <form className="pt-[25px] border-t border-[#EFF1F1]">
        <InputItem label="公司"></InputItem>
        <InputItem label="职位"></InputItem>
        <CommonDate classname="mb-[20px]"></CommonDate>
        <TextareaItem label="描述"></TextareaItem>
      </form>
    </div>
  );
}
