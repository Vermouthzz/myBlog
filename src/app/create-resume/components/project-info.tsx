import { CommonDate } from "./common-date";
import { CommonTitle } from "./common-title";
import { InputItem } from "./input-item";
import { TextareaItem } from "./textarea-item";
import React from "react";

export function ProjectItem() {
  return (
    <div className="flex py-[40px] border-b border-[#EFF1F1]">
      <CommonTitle title="项目经历" subTitle="请填写项目经历"></CommonTitle>
      <div className="project-block bg-white p-[18px] flex-1">
        <form className="">
          <InputItem label="项目名称" id="project-name"></InputItem>
          <InputItem label="项目角色" id="project-role"></InputItem>
          <CommonDate></CommonDate>
          <InputItem label="项目链接" id="project-link"></InputItem>
          <TextareaItem label="项目描述" classname="mb-[20px]"></TextareaItem>
          <div className="flex">
            <span className="ml-[auto]">删除</span>
          </div>
        </form>
      </div>
    </div>
  );
}
