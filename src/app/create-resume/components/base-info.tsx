import { CommonTitle } from "./common-title";
import { InputItem } from "./input-item";

export function BaseInfo() {
  return (
    <div className="flex">
      <CommonTitle title="基础信息" subTitle="请填写基础信息"></CommonTitle>
      <div className="flex-1 p-[10px]">
        <InputItem label="姓名"></InputItem>
        <InputItem label="手机号码"></InputItem>
        <InputItem label="邮箱"></InputItem>
      </div>
    </div>
  );
}
