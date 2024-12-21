import { Header } from "./header";

export function Banner() {
  return (
    <div className="h-screen relative w-screen bg-[] bg-cover bg-center">
      <div className="absolute w-full top-0 left-0 main-header">
        <Header></Header>
      </div>
      <div className="line flex absolute top-[60px] left-[100px] ">
        <div className="item flex items-center p-[6px] bg-slate-700">
          <img
            className="w-[30px] h-[30px] rounded-[2px]"
            src="/image/avator.jpg"
          />
          <span className="text-[14px] text-white">你好你好！！</span>
        </div>
      </div>
    </div>
  );
}
