"use client";
import { LoginForm } from "./widgets/login-form";

export default function LoginPage() {
  return (
    <div className="w-full h-screen relative">
      <img
        src="/image/login-bg.webp"
        className="w-full h-full absolute top-0 left-0 -z-1"
      />
      <div className="left-0 right-0 top-[100px] mx-auto w-[884px] flex absolute justify-between">
        <Logo />
        <LoginForm></LoginForm>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className=" mr-[200px] w-[251px] text-white">
      <div className="flex">
        <img src="/image/avator.jpg" className="w-[60px] h-[40px]" alt="" />
        <span className="text-[30px] font-medium ml-[6px]">博客日记</span>
      </div>
      <div className="flex justify-between text-[18px]">
        <span>分享足迹</span>
        <span>记录您的博客</span>
      </div>
    </div>
  );
}
