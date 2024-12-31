"use client";

import { Banner } from "./widgets/banner";
import { Catelog } from "./widgets/catalog";
import { HomeMain } from "./widgets/home-main";
import { UserInfo } from "./widgets/user-info";

export default function HomePage() {
  return (
    <div>
      <Banner></Banner>
      {/* 主体内容 */}
      <div className="flex">
        <div className="flex w-[280px] mx-auto flex-col">
          <UserInfo className=""></UserInfo>
          <Catelog className="mt-6"></Catelog>
        </div>
        <HomeMain className="order-1 w-[1064px]"></HomeMain>
      </div>
    </div>
  );
}

function Mask() {
  return <div className="h-screen"></div>;
}
