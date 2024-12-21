import { CommonTitle } from "../components/common-title";
import { TextareaItem } from "../components/textarea-item";

export function SelfEvaluationInfo() {
  return (
    <div className="flex py-[40px] border-b border-[#EFF1F1]">
      <CommonTitle title="自我评价" subTitle="请填写自我评价"></CommonTitle>
      <TextareaItem label="自我评价"></TextareaItem>
    </div>
  );
}
