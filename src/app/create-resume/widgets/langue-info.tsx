import { useCallback, useRef } from "react";
import { CommonTitle } from "../components/common-title";
import { SelectList } from "../components/select-list";

const langueList = [
  { text: "英语", type: 1 },
  { text: "日语", type: 2 },
  { text: "西班牙语", type: 3 },
  { text: "德语", type: 4 },
  { text: "法语", type: 5 },
  { text: "俄语", type: 6 },
  { text: "韩语", type: 7 },
  { text: "葡萄牙语", type: 8 },
  { text: "意大利语", type: 9 },
];

const jingtList = [
  { text: "入门", type: 1 },
  { text: "熟悉", type: 2 },
  { text: "精通", type: 3 },
];
export function LangueInfo() {
  const langueInput = useRef<HTMLInputElement>(null);
  const selectLangue = useCallback(() => {}, []);
  return (
    <div className="flex border-b border-[#EFF1F1] py-[40px]">
      <CommonTitle title="语言能力" subTitle="请填写语言能力"></CommonTitle>
      <div className="p-[10px] flex-1">
        <div className="relative">
          <label htmlFor="school" className="text-[14px]">
            语言
          </label>
          <div
            className="felx items-center py-[8px] px-[12px] border border-[#BBBFC3] rounded-[5px] text-[14px] cursor-pointer"
            onClick={selectLangue}
          >
            <div>哈哈哈哈哈哈哈</div>
            <input className="border-none" type="text" ref={langueInput} />
            <div></div>
          </div>
          <SelectList list={langueList}></SelectList>
        </div>
        <div className="relative">
          <label htmlFor="school" className="text-[14px]">
            精通程度
          </label>
          <div
            className="felx items-center py-[8px] px-[12px] common-border cursor-pointer"
            onClick={selectLangue}
          >
            <div v-show="!isFocus">哈哈哈哈哈哈哈</div>
            <input
              className="border-none"
              type="text"
              v-show="isFocus"
              ref={langueInput}
            />
            <div></div>
          </div>
          <SelectList list={jingtList}></SelectList>
        </div>
      </div>
    </div>
  );
}
