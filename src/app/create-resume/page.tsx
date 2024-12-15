"use client";

import React, { useRef } from "react";
import { SelectList } from "./components/select-list";
import { EducationInfo } from "./components/education-info";
import { ProjectItem } from "./components/project-info";
import { BaseInfo } from "./components/base-info";
import { LangueInfo } from "./components/langue-info";
import { SelfEvaluationInfo } from "./components/self-evaluation-info";

export default function CreateResumePage() {
  return (
    <React.Fragment>
      <div className="w-[1064px] mx-auto">
        <BaseInfo></BaseInfo>
        <EducationInfo></EducationInfo>
        <ProjectItem></ProjectItem>
        <LangueInfo></LangueInfo>
        <SelfEvaluationInfo></SelfEvaluationInfo>
      </div>
    </React.Fragment>
  );
}
