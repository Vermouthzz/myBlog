interface Props {
  title: string;
  subTitle: string;
}

export function CommonTitle({ title, subTitle }: Props) {
  return (
    <div className="flex flex-col w-[40%]">
      <div className="text-[20px] font-medium pb-[5px] relative">
        {title}
        <div className="absolute w-[26px] h-[4px] bottom-[-2px] bg-[#3370FF]"></div>
      </div>
      <span className="text-[14px] text-gray-500 mt-[20px]">{subTitle}</span>
    </div>
  );
}
