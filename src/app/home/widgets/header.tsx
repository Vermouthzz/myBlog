import React, { useRef } from "react";

// 导航列表
const headerList = [
  { name: "首页", icon: "", path: "" },
  { name: "说说", icon: "", path: "" },
  { name: "日志", icon: "", path: "" },
  { name: "首页", icon: "", path: "" },
  { name: "关于", icon: "", path: "" },
];

export function Header() {
  const checkBox = useRef(null);
  const rollBtn = useRef(null);
  const onGlobalChange = () => {};
  return (
    <React.Fragment>
      <header className="flex items-center justify-between home-header w-full">
        {/* 左边盒子 */}
        <div className="flex">
          <ul className="flex">
            {headerList.map((item) => (
              <li className="py-[10px] px-[12px]">
                <i></i>
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* 右边盒子 */}
        <div className="flex items-center pr-[30px]">
          <div
            className="w-[46px] h-[20px] custom-check rounded-full relative px-[1px] mr-[20px]"
            ref={checkBox}
            onClick={onGlobalChange}
          >
            <div
              className="check-btn w-[16px] h-[16px] rounded-full bg-black absolute top-[50%] -translate-y-1/2"
              ref={rollBtn}
            ></div>
          </div>
          <div className="relative">
            <img
              className="w-[30px] h-[30px] rounded-full"
              src="/src/assets/image/avator.jpg"
            />
            <ul className="p-[4px] w-[66px] rounded-[4px] shadow-xl text-[14px] bg-white absolute top-[36px] left-[-16px]">
              <li>主页设置</li>
              <li>博客管理</li>
            </ul>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}
