import { CommonDate } from "../components/common-date";
import { CommonTitle } from "../components/common-title";
import { InputItem } from "../components/input-item";

export function EducationInfo() {
  return (
    <div className="flex py-[40px] common-border-btm">
      <CommonTitle title="教育经历" subTitle="请填写教育经历"></CommonTitle>
      <form className="flex-1">
        <InputItem id="school" label="学校"></InputItem>
        <InputItem id="academic-bg" label="学历"></InputItem>
        <InputItem id="email" label="专业" placeholder="请填写您"></InputItem>
        <CommonDate></CommonDate>
      </form>
    </div>
  );
}
