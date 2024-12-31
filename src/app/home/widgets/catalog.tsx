export function Catelog({ className }: { className: string }) {
  return (
    <div className={`${className} shadow-sm rounded-lg bg-white w-[280px] `}>
      <title className="flex">
        <img src="" alt="" />
        <span>目录</span>
      </title>
      <div className="flex-col flex ">
        <Heading active={true}></Heading>
        <Heading active={false}></Heading>
      </div>
    </div>
  );
}

function Heading({ active }: { active: boolean }) {
  return (
    <div
      className={`py-2 ${
        active ? "bg-main text-white" : "bg-white text-green-500"
      } pl-2 max-w-60 whitespace-wrap`}
    >
      引言
    </div>
  );
}
