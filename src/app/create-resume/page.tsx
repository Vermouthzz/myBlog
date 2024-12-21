"use client";

import React, { useRef } from "react";
import { EducationInfo } from "./widgets/education-info";
import { ProjectItem } from "./widgets/project-info";
import { BaseInfo } from "./widgets/base-info";
import { LangueInfo } from "./widgets/langue-info";
import { SelfEvaluationInfo } from "./widgets/self-evaluation-info";

export default function CreateResumePage() {
  return (
    <React.Fragment>
      <div className="w-[1064px] mx-auto">
        <BaseInfo></BaseInfo>
        <EducationInfo></EducationInfo>
        <ProjectItem></ProjectItem>
        <LangueInfo></LangueInfo>
        <SelfEvaluationInfo></SelfEvaluationInfo>
        <div className="flex justify-between items-center font-medium text-[16px] py-[20px] sticky bottom-0 bg-white">
          <div className="w-[120px] border border-[#bbbfc4] cursor-pointer text-center text-[#1F2329] leading-[40px] ml-auto mr-[12px] hover:border-[#3370FF] hover:text-[#3370FF] rounded-[20px]">
            取消
          </div>
          <div className="w-[120px] leading-[40px] cursor-pointer text-center border-[#3370FF] border bg-[#3370FF] hover:bg-[#82a7fc] hover:border-[#82a7fc] text-white rounded-[20px]">
            保存
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
