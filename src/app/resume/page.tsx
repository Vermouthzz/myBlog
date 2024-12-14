import { ClipItem } from "../profile/components/clip-item";
import { UserResumeItem } from "./components/user-resume-item";

const itemInfo = [
  { title: "基本信息", list: [{ label: "姓名", value: "刘浩伟" }] },
  { title: "教育经历", list: [{ label: "姓名", value: "刘浩伟" }] },
  { title: "项目经历", list: [{ label: "姓名", value: "刘浩伟" }] },
  { title: "语言能力", list: [{ label: "姓名", value: "刘浩伟" }] },
  { title: "自我评价", list: [{ label: "姓名", value: "刘浩伟" }] },
];
export default function UserResumePage() {
  return (
    <div className="relative">
      <div
        className="absolute w-full h-[300px] top-0 left-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/image/main-bg.webp)",
        }}
      ></div>
      <div className="flex w-[1016px] h-[146px] items-center justify-between text-white z-10 relative mx-auto">
        <div className="flex flex-col">
          <span className="text-[24px]">我的简历</span>
          <span className="text-[16px] mt-[12px]">
            最近更新：2024-10-22 16:37
          </span>
        </div>
        <div className="">
          <i></i>
          <span>编辑</span>
        </div>
      </div>
      <div className="w-[1016px] rounded-[6px] bg-white z-10 relative mx-auto mb-[135px]">
        <div className="shadow-xl p-[40px]">
          {itemInfo.map((item) => (
            <UserResumeItem key={item.title} itemInfo={item}></UserResumeItem>
          ))}
        </div>
      </div>

      <ClipItem></ClipItem>
    </div>
  );
}
