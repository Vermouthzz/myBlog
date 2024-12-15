import { CommonItem } from "./common-item";

export function WorkInfo() {
  return (
    <div className="py-[40px] common-border-btm">
      <div className="flex pb-[40px]">
        <div className="w-[40%] text-[20px] relative">
          工作经历
          <div className="absolute w-[26px] h-[4px] bottom-[-8px] bg-[#3370FF]"></div>
        </div>
        <input v-model="hasWork" type="checkbox"></input>
        <label htmlFor="" className="ml-[15px]">
          没有工作经历
        </label>
      </div>
      <div className="flex">
        <div className="w-[40%] text-[14px] text-gray-500">请填写工作经历</div>
        <div className="px-[20px] common-hover flex-1">
          <CommonItem></CommonItem>
          <div className="flex items-center text-[#3370FF]">
            <span className="text-[30px]">+</span>
            <span className="ml-[6px]">添加</span>
          </div>
        </div>
      </div>
    </div>
  );
}
