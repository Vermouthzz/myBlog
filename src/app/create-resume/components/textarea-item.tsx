import { useRef } from "react";

interface Props {
  label: string;
  classname?: string;
}

export function TextareaItem({ label, classname }: Props) {
  const workDescription = useRef<HTMLTextAreaElement>(null);
  const onTextareaChange = () => {
    if (workDescription.current) {
      workDescription.current.style.height = "auto";
      workDescription.current.style.height = `${workDescription.current.scrollHeight}px`;
    }
  };
  return (
    <div className={`flex flex-col ${classname}`}>
      <label htmlFor="school" className="text-[14px] mb-[10px]">
        {label}
      </label>
      <textarea
        ref={workDescription}
        className="text-[#606266] border border-[#dcdfe6] rounded-[4px] bg-white leading-[1.5] px-[5px] py-[10px]"
        onInput={onTextareaChange}
      ></textarea>
    </div>
  );
}

// .common-textarea {
//     resize: vertical;
//     transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
// }
