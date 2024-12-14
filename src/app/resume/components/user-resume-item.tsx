interface Props {
  itemInfo: { title: string; list: { label: string; value: string }[] };
}

export function UserResumeItem({ itemInfo }: Props) {
  return (
    <div>
      {/* 标题 */}
      <div className="text-[20px] font-medium pb-[5px] relative mb-[20px]">
        {itemInfo.title}
        <span className="absolute w-[26px] h-[4px] bottom-[-2px] left-0 bg-[#3370FF]"></span>
      </div>
      {/* 内容 */}
      <div className="flex flex-wrap">
        {itemInfo.list.map((item, index) => (
          <div key={index} className="w-1/2 flex flex-col mb-[16px]">
            <span className="text-[#9B9C9E] text-[14px] mb-[3px]">
              {item.label}
            </span>
            <div>{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
