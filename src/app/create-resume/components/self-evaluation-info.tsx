import { CommonTitle } from "./common-title";
import { TextareaItem } from "./textarea-item";

export function SelfEvaluationInfo() {
  return (
    <div className="flex py-[40px]">
      <CommonTitle title="自我评价" subTitle="请填写自我评价"></CommonTitle>
      <TextareaItem label="自我评价"></TextareaItem>
    </div>
  );
}
