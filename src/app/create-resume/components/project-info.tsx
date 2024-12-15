import { CommonDate } from "./common-date";
import { CommonTitle } from "./common-title";
import { InputItem } from "./input-item";
import { TextareaItem } from "./textarea-item";
import React from "react";

export function ProjectItem() {
  return (
    <React.Fragment>
      <CommonTitle title="项目经历" subTitle="请填写项目经历"></CommonTitle>
      <div className="project-block bg-white p-[18px]">
        <form className="flex-1">
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
    </React.Fragment>
  );
}
